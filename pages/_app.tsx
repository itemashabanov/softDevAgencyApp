import type { AppProps } from "next/app";
import "../styles/globals.css";
import ScrollObserver from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SizeObserver>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </SizeObserver>
  );
}

export default MyApp;
