import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPssword } from '../../../auth';
import dbConnect from '../../../config/dbConnect';
import User from '../../../models/user';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        const db = await dbConnect();
        const { email, password } = credentials;

        const user = await User.findOne({ email }).select('+isAdmin');
        const userDoc = user._doc;
        const isValid = await verifyPssword(password, userDoc.password);
        console.log(isValid);

        if (user && isValid) {
          return user;
        } else {
          throw new Error('email ou mot de passe incorrect');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      user && (token.id = user._id);
      user && (token.isAdmin = user.isAdmin);
      console.log('token', token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.isAdmin = token.isAdmin;
      }
      console.log('session', { session });
      return session;
    },
  },
});
