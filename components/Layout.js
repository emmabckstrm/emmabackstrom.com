function Layout(props) {
  return (
    <>
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
