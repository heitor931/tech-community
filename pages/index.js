import Head from "next/head";

import HomePage from "../Components/HomePage";
function Page() {
  return (
    <>
      <Head>
        <title>Tech community & Ideas</title>
        <meta
          property="og:title"
          content="Tech community & ideas"
          key="title"
        />
      </Head>

      <div className="mainPage">
        <h1 className="title">Comunidade Tech Development & Ideas</h1>
        <HomePage />
      </div>
    </>
  );
}



export default Page;
