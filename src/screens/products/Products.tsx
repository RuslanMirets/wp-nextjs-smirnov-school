import Layout from "@/src/components/Layout";
import ProductCard from "@/src/components/product-card/ProductCard";
import QueryLog from "@/src/components/query-log/QueryLog";
import { ProductService } from "@/src/services/product.service";
import { IProducts } from "@/src/types/product.interface";
import Container from "@/src/ui/container/Container";
import Heading from "@/src/ui/heading/Heading";
import { useQuery } from "@tanstack/react-query";
import styles from "./Products.module.scss";
import RequestTime from "@/src/components/request-time/RequestTime";

const Products = () => {
	const { data, isLoading } = useQuery(["products"], ProductService.getAll);

	const products: IProducts[] = data?.data.products.nodes;

	const requestTime = data?.requestTime;

	const queryCount = data?.extensions.queryLog.queryCount;
	const totalTime = data?.extensions.queryLog.totalTime;
	const graphqlSmartCache =
		data?.extensions.graphqlSmartCache.graphqlObjectCache.message;

	return (
		<Layout title="Товары">
			<Container>
				<Heading>Товары</Heading>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<>
						<RequestTime requestTime={requestTime} />
						<QueryLog
							queryCount={queryCount}
							totalTime={totalTime}
							graphqlSmartCache={graphqlSmartCache}
						/>
						<ul className={styles.list}>
							{products.map((product) => (
								<li key={product.databaseId}>
									<ProductCard product={product} />
								</li>
							))}
						</ul>
					</>
				)}
			</Container>
		</Layout>
	);
};

export default Products;
