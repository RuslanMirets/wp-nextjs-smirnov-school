import { withCSR } from "@/src/HOC/with-CSR";
import Blog from "@/src/screens/blog/Blog";
import { PostService } from "@/src/services/post.service";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

const BlogPage = () => {
	return <Blog />;
};

export const getServerSideProps: GetServerSideProps = withCSR(async () => {
	const queryClient = new QueryClient();

	await queryClient.fetchQuery(["posts"], PostService.getAll);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
});

export default BlogPage;
