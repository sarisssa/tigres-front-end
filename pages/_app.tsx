import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { TigresConfigurationProvider } from "../state/tigresContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TigresConfigurationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TigresConfigurationProvider>
  );
}

export default MyApp;
