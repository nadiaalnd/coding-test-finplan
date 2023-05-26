import React from "react";
import Head from "next/head";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>profile-app</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </Head>
      <div className="bg-[#212121] min-h-screen">
        <div className="sm:max-w-sm sm:mx-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyApp;