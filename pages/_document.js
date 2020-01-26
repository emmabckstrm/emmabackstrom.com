import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head />
        <body>
        <style jsx global>{`
            body, html, #__next {
                position: relative;
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
            }
            body {
                background: #ddd;
              }
        `}</style>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
