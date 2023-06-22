import { withCSR } from "@/src/HOC/with-CSR";
import CGB from "@/src/screens/cgb/CGB";
import { PageService } from "@/src/services/page.service";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

const CGBPage = () => {
	return <CGB />;
};

export const getServerSideProps: GetServerSideProps = withCSR(async () => {
	const queryClient = new QueryClient();

	await queryClient.fetchQuery(["page-cgb"], PageService.getCGB);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
});

export default CGBPage;
