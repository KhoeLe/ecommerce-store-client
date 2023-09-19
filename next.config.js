/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: [
            "res.cloudinary.com",
            "louisle.s3.ap-southeast-1.amazonaws.com",
        ],
        deviceSizes: [320, 640, 768, 1024, 1600], // Define the device sizes for responsive images
        imageSizes: [16, 32, 48, 64, 96], // Define the image sizes to be generated
        formats: ["image/webp"], // Define the image formats to be generated
    },
    output: 'standalone',
};

module.exports = nextConfig;
