import NextAuth from 'next-auth/next';
import { NextAuthOptions,User } from 'next-auth';
import TraktProvider from 'next-auth/providers/trakt';
import GoogleProvider from "next-auth/providers/google";

export const authConfig: NextAuthOptions ={
    providers:[
        TraktProvider({
            clientId:process.env.TRAKT_CLIENT_ID as string,
            clientSecret:process.env.TRAKT_CLIENT_SECRET as string,
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
          if (user) {
            return { ...token, ...user }
          }
          return token
        },
        async session({ session, token }) {
          return { ...session, user: { ...session.user, ...token } }
        },
      }
};