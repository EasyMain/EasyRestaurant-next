import { AppProps } from "next/app";
import "../styles/global.css";

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;