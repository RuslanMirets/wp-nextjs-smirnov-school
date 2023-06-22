import Layout from "@/src/components/Layout";
import Container from "@/src/ui/container/Container";
import { Typography } from "@mui/material";

const Home = () => {
	return (
		<Layout title="Главная">
			<Container>
				<Typography variant="h4" component="h1">
					Главная
				</Typography>
			</Container>
		</Layout>
	);
};

export default Home;
