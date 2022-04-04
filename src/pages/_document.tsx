import Document, { Html, Head, Main, NextScript } from "next/document";
// eslint-disable-next-line @next/next/no-script-in-document
// import Script from "next/script";

class MyDocument extends Document {
  public render() {
    return (
      <Html lang="en">
        <Head>
            <meta name="description" content="Khai Hoan E-commerce website with Next.js" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
