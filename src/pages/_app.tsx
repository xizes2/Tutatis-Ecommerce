import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Layout from "../../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
              fontSize: "1.3rem",
              padding: "15px",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
    </Layout>
  );
}
