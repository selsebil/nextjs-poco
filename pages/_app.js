import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import './globals.css';
import Header from "./Header";


function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Header/>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
