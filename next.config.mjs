/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: "/api/v2",
                destination: "https://api.deepl.com/v2/translate",
            },
        ];
    },
    trailingSlash: true,
};

export default nextConfig;
