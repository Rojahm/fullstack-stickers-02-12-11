// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sticker.storage.iran.liara.space",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
module.exports = nextConfig;
// module.exports = {
//   output: "standalone",
// };
// module.exports = {
//   experimental: {
//     missingSuspenseWithCSRBailout: false,
//   },
// };
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "sticker.storage.iran.liara.space",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// };
