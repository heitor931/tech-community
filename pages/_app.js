import '../styles/globals.scss'
import { Analytics } from "@vercel/analytics/react";
import Layout from "../Components/layout";

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  ); 
}

export default MyApp
