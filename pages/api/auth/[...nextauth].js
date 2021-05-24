import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const nextOptions = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
      audience: 'https://api.wevrdmc.com',
      accessToken: true,
      idToken: true
      // authorizationUrl: `https://${process.env.AUTH0_DOMAIN}/authorize?response_type=code&audience=https://api.wevrdmc.com`
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
    secret: process.env.NEXTAUTH_SECRET
  },
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      console.log(token);
      console.log(account);
      console.log(profile);
      // if (account?.accessToken) {
      //   token.accessToken = account.accessToken;
      // }
      if (account?.idToken) {
        token.idToken = account.idToken;
      }
      return token;
    },

    async session(session, token) {
      console.log(token);
      // session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      return session;
    }
  }
};

export default (req, res) => NextAuth(req, res, nextOptions);
