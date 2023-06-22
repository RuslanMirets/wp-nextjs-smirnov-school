import { withCSR } from "@/src/HOC/with-CSR";
import Courses from "@/src/screens/courses/Courses";
import { CourseService } from "@/src/services/course.service";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

const CoursesPage = () => {
	return <Courses />;
};

export const getServerSideProps: GetServerSideProps = withCSR(async () => {
	const queryClient = new QueryClient();

	await queryClient.fetchQuery(["courses"], CourseService.getAll);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
});

export default CoursesPage;
