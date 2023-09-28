'use client'
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginFailure, loginStart, loginSuccess } from "@/utils/redux/userSlice"
import { useRouter } from "next/navigation"
import { IconEye } from "@tabler/icons-react"
import { IconEyeOff } from "@tabler/icons-react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { verifyEmail } from "@/utils/functions/helper"
// import { signIn } from "next-auth/react"
import { doc, setDoc } from "firebase/firestore"
import { db, auth } from "@/lib/firebase/config"
import signIn from "@/lib/firebase/auth/signin"
import { sendSignInLinkToEmail } from "firebase/auth";
import ErrorAlert from "../misc/ErrorAlert"
import SuccessAlert from "../misc/SuccessAlert"

export default function SignUpForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('')
  const [position, setPosition] = React.useState('');
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [eye, seteye] = React.useState({ password: false, confirmPassword: false });
  const [error, setError] = React.useState('')
  const [popUp, setPopup] = React.useState(false)
  const [loading, setLoading] = React.useState(false);
  const [loginLoading, setLoginLoading] = React.useState(false);
  const [loginSuccess, setLoginSuccess] = React.useState('');

  // INSTANCE
  const router = useRouter();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  useEffect(()=> {
    if(currentUser) {
      router.push("/")
    }
  },[])

  const resetFields = ()=> {
    setName('');
    setEmail('')
    setPosition('')
    setPassword('')
    setConfirmPassword('')
    setPhoneNumber('')
  }

  const handleForm = async (event) => {
    event.preventDefault();
    setError('')
    setLoading(true)

    try {
      // CHECK FOR VERIFYING EMPLOYEE AND ADMIN OF SIXPL
      if (verifyEmail(email)) {

        if (confirmPassword !== password) {
          setError('Password do not matched')
          setLoading(false)
          return;
        }

        // CREATING USER
        const res = await createUserWithEmailAndPassword(auth, email, password)
        // IF USER IS CREATED THEN SHOW POP FOR EMAIL VERIFICATION
        if (res.user) { setPopup(true) }

        // REGISTERING USER IN OUR DB"
        await setDoc(doc(db, "team", res.user.uid), {
          id: res.user.uid,
          name: name,
          email: res.user.email,
          phoneNumber: phoneNumber,
          isVerified: res.user.emailVerified,
          position: position,
          role: 'employee',
          creationTime: res.user.metadata.creationTime,
          lastSignInTime: res.user.metadata.lastSignInTime,
        });

        setLoginLoading(true);
        await sendSignInLinkToEmail(auth, email, {
          url: `http://localhost:3000/verification?id=${res.user.uid}`,
          handleCodeInApp: true
        }).then(() => {
          localStorage.setItem('emailForSignIn', email);
          setLoginLoading(false)
          resetFields()
          setLoginSuccess("Email verification sent to your mail")
        }).catch((err) => {
          setLoginLoading(false)
          setError(err.message)
          res.user.delete().then(()=> {
            console.log("User deleted also");
          })
        })

      } else {
        setError('Only Sixpl employees and admin can login')
        setLoading(false)
        return;
      }
    }

    catch (error) {
      setLoading(false)
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        setError('You already have an account please sign-in')
      } else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
        setError('Password should be at least 6 character')
      } else {
        console.log(error)
      }
    }
  }

  const handleToggle = (name) => {
    seteye((prevValue) => ({
      ...prevValue,
      [name]: !prevValue[name],
    }));
  };

  return (
    <React.Fragment>
      {/* {popUp && <EmailVerificationPopup handleModal={handleModal} />} */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/sixpl-logo.svg"
            alt="SixPL Logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800/90">
            Register Your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleForm} className="space-y-6" action="#" method="POST">

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-800/90">
                Full Name
              </label>
              <div className="">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>



            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-800/90">
                Email address
              </label>
              <div className="">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-800/90">
                Phone number
              </label>
              <div className="">
                <input
                  id="phone"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="phone-number"
                  required
                  value={phoneNumber}
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-800/90">
                Position
              </label>
              <div className="">
                <input
                  id="position"
                  name="position"
                  type="text"
                  autoComplete="position"
                  required
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">

                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-800/90">
                  password
                </label>
              </div>
              <div className=" flex items-center relative">
                <input
                  id="password"
                  name="password"
                  type={eye.password ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span className="absolute right-2" onClick={() => { handleToggle("password") }}>
                  {eye.password ? <IconEye className="text-gray-500" /> : <IconEyeOff className="text-gray-500" />}
                </span>

              </div>

            </div>

            <div>
              <div className="flex items-center justify-between">

                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-800/90">
                  Confirm password
                </label>
              </div>
              <div className=" flex items-center relative">
                <input
                  id="Confirmpassword"
                  name="Confirmpassword"
                  type={eye.confirmPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span className="absolute right-2" onClick={() => handleToggle("confirmPassword")}>
                  {eye.confirmPassword ? <IconEye className="text-gray-500" /> : <IconEyeOff className="text-gray-500" />}
                </span>

              </div>

            </div>
            <div>
              <button
                onClick={handleForm}
                type="submit"
                disabled={!email || !password || !confirmPassword || loading || !name || !position || !phoneNumber}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400"
              >
                Sign up
              </button>
            </div>

            {error && <ErrorAlert message={error}/>}
            {loginSuccess && <SuccessAlert message={loginSuccess}/>}

          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have account?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login now!
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}