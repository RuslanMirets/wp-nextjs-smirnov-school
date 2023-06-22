import Layout from "@/src/components/Layout";
import PostsList from "@/src/components/posts-list/PostsList";
import QueryLog from "@/src/components/query-log/QueryLog";
import RequestTime from "@/src/components/request-time/RequestTime";
import { PostService } from "@/src/services/post.service";
import { useRenderTimeStore } from "@/src/store";
import { IPosts } from "@/src/types/post.interface";
import Container from "@/src/ui/container/Container";
import Heading from "@/src/ui/heading/Heading";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Blog = () => {
	const { data, isLoading } = useQuery(["posts"], PostService.getAll);
	const posts: IPosts[] = data?.data.posts.nodes;

	const requestTime = data?.requestTime;

	const queryCount = data?.extensions.queryLog.queryCount;
	const totalTime = data?.extensions.queryLog.totalTime;
	const graphqlSmartCache =
		data?.extensions.graphqlSmartCache.graphqlObjectCache.message;

	return (
		<Layout title="Блог">
			<Container>
				<Heading>Блог</Heading>

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
						<PostsList posts={posts} />
					</>
				)}
			</Container>
		</Layout>
	);
};

export default Blog;
