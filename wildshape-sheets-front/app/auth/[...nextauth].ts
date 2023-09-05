import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'
import https from 'https'
import { endpoints } from '../../config' // Adjust this path based on your directory structure

// Create a new Axios instance
const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: { email: string; password: string; } | undefined, req) {
        // If credentials is undefined, throw an error or handle it as per your application's requirements
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
          throw new Error('Invalid username/password')
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
  },
  debug: true
})
