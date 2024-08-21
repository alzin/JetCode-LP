/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"api.producthunt.com",
                pathname:"/widgets/embed-image/v1/**"
            }
        ],
        dangerouslyAllowSVG:true
    }
};

export default nextConfig;
