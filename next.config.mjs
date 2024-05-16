/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    typescript: {
        ignoreBuildErrors: true,
    },
    async rewrites() {
        return [
            {
                source: "/v1/translation",
                destination: "https://naveropenapi.apigw.ntruss.com/nmt/v1/translation",
            },
        ];
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: "/v2/translate",
    //             destination: "https://api-free.deepl.com/v2/translate",
    //         },
    //     ];
    // },
    // async headers() {
    //     return [
    //       {
    //         source: '/v2/:path',
    //         headers: [
    //           { key: 'Access-Control-Allow-Credentials', value: 'true' },
    //           { key: 'Access-Control-Allow-Origin', value: '*' },
    //           {
    //             key: 'Access-Control-Allow-Methods',
    //             value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    //           },
    //           {
    //             key: 'Access-Control-Allow-Headers',
    //             value:
    //               'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    //           },
    //         ],
    //       },
    //     ]
    //   },
    // trailingSlash: true,
};

export default nextConfig;
