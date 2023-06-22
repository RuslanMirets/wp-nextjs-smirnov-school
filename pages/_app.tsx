import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { queryClientConfig } from "@/src/config/query-client.config";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient(queryClientConfig));

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<CssBaseline />
				<Component {...pageProps} />
			</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
