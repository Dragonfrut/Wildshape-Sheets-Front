import axios from "axios";
import https from 'https'
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { endpoints } from '@/config' // Adjust this path based on your directory structure
// import { signIn } from "next-auth/react";

const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  });

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  // pages: {
  //   signIn: '/login',
  //   signOut: '/auth/signout',
  //   error: '/login', // Error code passed in query string as ?error=
  //   //verifyRequest: '/auth/verify-request', // (used for check email message)
  //   //newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" }
        },
      async authorize(credentials: { email: string; password: string; } | undefined, req) {
        if (!credentials) {
          throw new Error('Credentials are not provided');
        }
        console.log('endpont', endpoints.login)
        try {
          // Use the custom Axios instance here
          const { data: user } = await axiosInstance.post(endpoints.login, {
            email: credentials.email,
            password: credentials.password,
          })

          if (user) {
            return user
          } else {
            return null
          }
        } catch (e) {
          console.log("error", e)
          //throw new Error('Invalid username/password')
          
        }
      },
    }),
  ],


  callbacks: {
    jwt: async (params) => {
      const { user, token } = params;

      if (user) {
        return { ...token, ...user }
      }
      return token
    },
    session: async ({ session, token, user }) => {
      session.user = user || token;
      return session;
    }
  }
};
