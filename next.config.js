/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: true,
	env: {
		WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		YANDEX_CLIENT_ID: process.env.YANDEX_CLIENT_ID,
		YANDEX_CLIENT_SECRET: process.env.YANDEX_CLIENT_SECRET,
	},
	images: {
		domains: [
			"dev.smirnov.school",
			"lh3.googleusercontent.com",
			"localhost",
			"avatars.yandex.net",
		],
	},
	async rewrites() {
		return [
			{
				source: "/metrics",
				destination: "/api/metrics",
			},
		];
	},
};

module.exports = nextConfig;
