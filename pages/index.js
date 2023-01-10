import Head from "next/head";

import HomePage from "../Components/HomePage";
function Page() {
  return (
    <>
      <Head>
        <title>Telco community & Ideas</title>
        <meta
          property="og:title"
          content="Telco community & ideas"
          key="title"
        />
      </Head>

      <div className="mainPage">
        <h1 className="title">Comunidade Telco Development & Ideas</h1>
        <HomePage />
      </div>
    </>
  );
}

export default Page;
