import Layout from "@/src/components/Layout";
import Container from "@/src/ui/container/Container";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import Heading from "@/src/ui/heading/Heading";
import Image from "next/image";
import { IUser } from "@/src/types/user.interface";
import RequestTime from "@/src/components/request-time/RequestTime";
import { useRequestTimeStore } from "@/src/store";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getServerSession(context.req, context.res, authOptions);

	if (!session) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}

	return {
		props: {
			user: session?.user,
		},
	};
};

const ProfilePage = ({ user }: IUser) => {
	const requestTime = useRequestTimeStore((state: any) => state.value);

	return (
		<Layout title="Профиль">
			<Container>
				<Heading>Профиль</Heading>
				{requestTime !== 0 && <RequestTime requestTime={requestTime} />}
				<div>{user.name}</div>
				<div>{user.email}</div>
				{user.image && (
					<Image src={user.image} width={100} height={100} alt={user.name} />
				)}
				{user.avatar && (
					<Image
						src={user.avatar.url}
						width={100}
						height={100}
						alt={user.name}
					/>
				)}
			</Container>
		</Layout>
	);
};

export default ProfilePage;
