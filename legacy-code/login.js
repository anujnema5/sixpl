import Layout from "../components/nav/layout"
import SignInForm from "../components/auth/signInForm"

import { AuthContextProvider } from '../lib/context/AuthContext'

export default function LoginPage() {
    return (
        <AuthContextProvider>
            <Layout>
                <SignInForm />
            </Layout>
        </AuthContextProvider>
    )
}

