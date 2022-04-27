import Head from "next/head";

const URL = "https://emmabackstrom.com/";
const TITLE = "Emma Bäckström";
const DESCRIPTION = "Frontend/fullstack Engineer";

function Layout(props) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Emma Bäckström</title>
        <meta name="title" content={TITLE} />
        <meta name="description" content={DESCRIPTION} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />

        {/* Twitter */}
        <meta property="twitter:url" content={URL} />
        <meta property="twitter:title" content={TITLE} />
        <meta property="twitter:description" content={DESCRIPTION} />
      </Head>

      {props.children}
      <style jsx global>{`
        html,
        body,
        #__next {
          position: relative;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
        body {
          font-size: 18px;
          font-weight: 400;
          line-height: 1.8;
          color: #333;
          background: #eee;
          font-family: sans-serif;
        }
      `}</style>
    </>
  );
}

export default Layout;
