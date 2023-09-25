import NextAuth, { getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from 'firebase/auth';
import app, { auth } from "@/lib/firebase/config";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/lib/redux/userSlice";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";


const authOptions = {
  pages: {
    signIn: '/signin' | '/signup',
  },



  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      
      async authorize(credentials) {
        return await signInWithEmailAndPassword(auth, (credentials).email || '', (credentials).password || '')
          .then(userCredential => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch(error => (console.log(error)))
      }
    })
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        console.log("jwt callback is invoking");
        token.email = user.email;
        token.accessToken = "12345";
      }

      return token;
    },
    session: ({ session, token, user }) => {
      if (token) {
        console.log("session callback is invoking");
        session.user.email = token.email;
        // session.user.username = token.userName;
        // session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
}

export const getAuthSession = () => getServerSession(authOptions);

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }