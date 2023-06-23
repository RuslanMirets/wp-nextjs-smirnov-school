import Layout from "@/src/components/Layout";
import Heading from "@/src/ui/heading/Heading";
import { IPage } from "@/src/types/page.interface";
import Image from "next/image";
import Container from "@/src/ui/container/Container";
import { useQuery } from "@tanstack/react-query";
import { PageService } from "@/src/services/page.service";
import QueryLog from "@/src/components/query-log/QueryLog";
import RequestTime from "@/src/components/request-time/RequestTime";

const CGB = () => {
	const { data, isLoading } = useQuery(["page-cgb"], PageService.getCGB);

	const page: IPage = data?.data.page;

	const requestTime = data?.requestTime;

	const queryCount = data?.extensions.queryLog.queryCount;
	const totalTime = data?.extensions.queryLog.totalTime;
	const graphqlSmartCache =
		data?.extensions.graphqlSmartCache?.graphqlObjectCache.message;

	return (
		<Layout title={page?.title || ""}>
			<Container>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<>
						<RequestTime requestTime={requestTime} />
						{queryCount && (
							<QueryLog
								queryCount={queryCount}
								totalTime={totalTime}
								graphqlSmartCache={graphqlSmartCache}
							/>
						)}
						<Heading>{page.title}</Heading>
						<div className="mb-10">
							<h2
								className="mb-4 font-bold"
								dangerouslySetInnerHTML={{ __html: page.rm.introTitle }}
							/>
							<div className="mb-4 text-neutral-500">
								<p>{page.rm.introDesc}</p>
							</div>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(4, 1fr)",
								}}
							>
								{page.rm.workList.map((item) => (
									<div key={item.workListImg.sourceUrl}>
										<div>{item.workListName}</div>
										<div>
											<Image
												src={item.workListImg.sourceUrl}
												width={300}
												height={300}
												alt={item.workListName}
												priority
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</>
				)}
			</Container>
		</Layout>
	);
};

export default CGB;
