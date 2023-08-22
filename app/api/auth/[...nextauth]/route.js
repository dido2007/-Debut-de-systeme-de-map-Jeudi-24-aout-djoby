import { connectToDB } from "@utils/database";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {

            },
            autorize(credentials, req){
                const {phoneNumber} = credentials

                // await connectToDB


            }
        })
    ],
    async session({ session }) {

    },

    async signIn({ profile }) {

    },
    pages: {
        signIn: "/auth/login",
        newUser: "/auth/signup",
    },

})

export { handler as GET, handler as POST };