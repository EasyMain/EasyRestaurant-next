import { SSRProvider } from "ui";
import "../styles/global.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <SSRProvider>
      <Component {...pageProps} />;
    </SSRProvider>
  );
}

export default MyApp;
