import Layout from "@/src/components/Layout";
import { CourseService } from "@/src/services/course.service";
import Container from "@/src/ui/container/Container";
import Heading from "@/src/ui/heading/Heading";
import { useQuery } from "@tanstack/react-query";

const Courses = () => {
	const { data, isLoading } = useQuery(["courses"], CourseService.getAll);

	console.log(data);

	return (
		<Layout title="Курсы">
			<Container>
				<Heading>Курсы</Heading>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<ul>
						{data.map((item: any) => (
							<li key={item.id}>{item.title.rendered}</li>
						))}
					</ul>
				)}
			</Container>
		</Layout>
	);
};

export default Courses;
