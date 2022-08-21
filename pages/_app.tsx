import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import Store from "../context/store";

const ISSERVER = typeof window === "undefined";
export let storage: string | null = "" || null;
if (!ISSERVER) {
    storage = localStorage.getItem('token')
}

export const client = new ApolloClient({
    uri: "https://api.vrmarketing.guru/",
    cache: new InMemoryCache(),
    headers: {
        authorization: storage || ''
    }
})

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Store>
                <Component {...pageProps} />
            </Store>
        </ApolloProvider>
    )
}

export default MyApp;
