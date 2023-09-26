'use client'
import React, { useEffect } from "react"
import signIn from "@/lib/firebase/auth/signin"
import { useDispatch } from "react-redux"
import { loginFailure, loginStart, loginSuccess } from "@/lib/redux/userSlice"
import { auth } from "@/lib/firebase/config"
import { useRouter } from "next/navigation"
import { getDatabase, ref, set } from "firebase/database";
// import { signIn } from "next-auth/react"
import Link from "next/link"
import { IconEye } from "@tabler/icons-react"
import { IconEyeOff } from "@tabler/icons-react"
import { sendPasswordResetEmail, sendSignInLinkToEmail, signInWithEmailAndPassword } from "firebase/auth"
import { verifyEmail } from "@/utils/functions/helper"
import SuccessAlert from "../misc/SuccessAlert"
import ErrorAlert from "../misc/ErrorAlert"

export default function SignInForm() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [eye, setEye] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [logginUsingEmail, setlogginUsingEmail] = React.useState(false);
  const [error, setError] = React.useState('');
  const [forgetPassword, setForgetPassword] = React.useState(false);
  const [success, setSuccess] = React.useState('');

  const router = useRouter();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (currentUser?.email) {
  //     router.push("/")
  //   }
  // }, [])

  const handleToggle = () => {
    setEye(!eye);
  }

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!verifyEmail(email)) {
      setError("Invalid email");
      setSuccess("");
      setLoading(false);
    } else {
      try {
        console.log("Hello");
        const res = await signInWithEmailAndPassword(auth, email, password);
        dispatch(loginSuccess(res.user))
        setSuccess("Login successfull")
        setLoading(false);
        router.push("/dashboard/jobpostings")

      } catch (error) {
        setLoading(false);
        setError(error.message);
        console.log(error); // DEV PURPOSE
        router.refresh()
      }
    }
  }

  const triggerForgetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email) {
      setError("Please fill the email");
      setSuccess("");
      setLoading(false);
    } else if (!verifyEmail(email)) {
      setError("Invalid email");
      setSuccess("");
      setLoading(false);
    }
    else {
      try {
        await sendPasswordResetEmail(auth, email);
        setSuccess('Password reset link sent to your email');
        setError("");
      }
      catch (error) {
        setLoading(false);
        console.log("I am triggering");
        console.log(error);
      }

      finally {
        setLoading(false);
      }
    }
  }

  const handleResetStates = () => {
    setError("");
    setSuccess("");
  }

  const handleSendLinkToEmail = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (!email) {
      setError("Please fill the email");
      setSuccess("");
      setLoading(false);
    } else if (!verifyEmail(email)) {
      setError("Invalid email");
      setSuccess("");
      setLoading(false);
    } else {
      await sendSignInLinkToEmail(auth, email, {
        url: `http://localhost:3000/dashboard`,
        handleCodeInApp: true
      }).then((res) => {
        localStorage.setItem('emailForSignIn', email);
        setLoading(false)
        setError('')
        setSuccess('Signin link sent to your email')
        // console.log("Email link sent to your mail"); //DEV PURPOSE
      }).catch((err) => {
        setLoading(false)
        setError(err.message)
      })
    }
  }

  if (logginUsingEmail && !forgetPassword) {
    return (
      <React.Fragment>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/sixpl-logo.svg"
              alt="SixPL Logo"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800/90">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSendLinkToEmail} className="space-y-6 pb-4" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-800/90">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={!email || loading}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400"
                >
                  Sign in with email
                </button>
              </div>
            </form>

            {error && <ErrorAlert message={error} />}
            {success && <SuccessAlert message={success} />}

            <span onClick={() => { setlogginUsingEmail(false); handleResetStates() }} className="text-sm cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500 px-3">
              Login using email & password ?
            </span>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Signup Now!
              </Link>
            </p>


          </div>
        </div>
      </React.Fragment>
    )
  }

  else if (forgetPassword) {

    return (
      <React.Fragment>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/sixpl-logo.svg"
              alt="SixPL Logo"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800/90">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6 pb-4" onSubmit={triggerForgetPassword}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-800/90">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={!email || loading}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400"
                >
                  Recover your password via email
                </button>
              </div>
            </form>

            {success && <SuccessAlert message={success} />}

            <span onClick={() => {
              setlogginUsingEmail(false);
              setForgetPassword(false)
              handleResetStates();
            }}
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 px-3 cursor-pointer">
              Back to login ?
            </span>

            {error && <div className="flex justify-center text-rose-800 font-semibold mx-auto">{error}</div>}


            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Signup Now!
              </Link>
            </p>
          </div>
        </div>
      </React.Fragment>
    )
  }

  else {

    return (
      <React.Fragment>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/sixpl-logo.svg"
              alt="SixPL Logo"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800/90">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleForm} className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-800/90">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>



              <div>
                <div className="flex items-center justify-between">

                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-800/90">
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={eye ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <span className="absolute right-3 top-2 cursor-pointer" onClick={handleToggle}>
                    {eye ? <IconEye className="text-gray-500" /> : <IconEyeOff className="text-gray-500" />}
                  </span>
                </div>
              </div>
              <div>
                <button
                  onClick={handleForm}
                  type="submit"
                  disabled={!email || !password || loading}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="text-sm pt-5 flex justify-between px-2">
              <span onClick={() => { setForgetPassword(true); handleResetStates() }} className="font-semibold cursor-pointer text-indigo-600 hover:text-indigo-500">
                Forgot password ?
              </span>

              <span onClick={() => { setlogginUsingEmail(true); handleResetStates() }} className="font-semibold cursor-pointer text-indigo-600 hover:text-indigo-500">
                Login using email ?
              </span>
            </div>

            {/* <div>
              {linkSend && <span>Password link send</span>}
            </div> */}

            <div className="mt-3">
            {error && <ErrorAlert message={error}/>}
            {success && <SuccessAlert message={success}/>}
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Signup Now!
              </Link>
            </p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
