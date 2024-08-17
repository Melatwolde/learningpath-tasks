import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
        name: "Credentials",
        credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials:any) {
        const response = await fetch('https://akil-backend.onrender.com/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        const data = await response.json();

        if (data.success && data.data) {
          return {
            id: data.data.id,
            name: data.data.name,
            email: data.data.email,
            accessToken: data.data.accessToken,
            refreshToken: data.data.refreshToken,
            profileStatus: data.data.profileStatus,
          };
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: { token: any, user: any }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.profileStatus = user.profileStatus;
      }
      return token;
    },
    async session({ session, token }: { session: any, token: any }) {
      session.user.accessToken = token.accessToken;
      session.user.profileStatus = token.profileStatus;
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',  
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',  
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
};