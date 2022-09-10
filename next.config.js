/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: 'https://hotelbookinghotel.vercel.app',
    MONGO_URI:
      'mongodb+srv://kouakou:Kouakou2107@ecommerceweb.qy9ae.mongodb.net/hotelbooking?retryWrites=true&w=majority',
  },

  images: {
    domains: ['themes.quitenicestuff2.com', 'makaanlelo.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
