"use client";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { base } from "wagmi/chains";
import { useState } from "react";
import { WagmiProvider } from "wagmi";
import {
	RainbowKitProvider,
} from "@rainbow-me/rainbowkit";


import { wagmiConfig } from "@/config/wagmi";

export function OnchainProviders(props) {
	// const [config] = useState(() => getConfig());
	const [queryClient] = useState(() => new QueryClient());

	return (
		<WagmiProvider config={wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				<OnchainKitProvider
					apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
					chain={base}
				>
					<RainbowKitProvider modalSize="compact">
						{props.children}
					</RainbowKitProvider>
				</OnchainKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}
