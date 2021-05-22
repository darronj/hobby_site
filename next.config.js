console.log(process.env.VERCEL_URL);
module.exports = {
  env: {
    NEXT_PUBLIC_SITE_NAME: process.env.SITE_NAME || 'My Site',
    AUTH0_BASE_URL: process.env.VERCEL_URL || 'http://localhost:3000',
    NEXT_PUBLIC_URL: process.env.VERCEL_URL || 'http://localhost:3000'
  }
};
