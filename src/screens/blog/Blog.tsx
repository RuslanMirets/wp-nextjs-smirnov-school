import Layout from "@/src/components/Layout";
import Container from "@/src/ui/container/Container";
import { Typography } from "@mui/material";

const Blog = () => {
	return (
		<Layout title="Блог">
			<Container>
				<Typography variant="h4" component="h1">
					Блог
				</Typography>
			</Container>
		</Layout>
	);
};

export default Blog;
