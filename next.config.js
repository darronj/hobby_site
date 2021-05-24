const getURL = () => {
  const url =
    process?.env?.URL && process.env.URL !== ''
      ? process.env.URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ''
      ? process.env.VERCEL_URL
      : 'http://localhost:3000';
  return url.includes('http') ? url : `https://${url}`;
};
const URL = getURL();

module.exports = {
  env: {
    NEXT_PUBLIC_SITE_NAME: process.env.SITE_NAME || 'My Site',
    NEXT_PUBLIC_URL: URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || URL,
    NEXTAUTH_SECRET: process.env.JWT_SECRET
  }
};
