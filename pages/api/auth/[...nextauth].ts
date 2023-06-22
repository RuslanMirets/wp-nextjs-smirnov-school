import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import YandexProvider from "next-auth/providers/yandex";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { QueryClient } from "@tanstack/react-query";
import { AuthService } from "@/src/services/auth.service";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "email", type: "email" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password)
					throw new Error("Invalid credentials");

				const queryClient = new QueryClient();

				const { data } = await queryClient.fetchQuery(["user"], () =>
					AuthService.loginUser(credentials?.email, credentials?.password),
				);

				if (data) return data.login.user;
				else return null;
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		YandexProvider({
			clientId: process.env.YANDEX_CLIENT_ID!,
			clientSecret: process.env.YANDEX_CLIENT_SECRET!,
		}),
	],
	pages: {
		signIn: "/login",
	},
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},

		async session({ session, token }) {
			session.user = token as any;
			return session;
		},
	},
	session: { strategy: "jwt" },
	secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
