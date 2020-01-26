function Layout(props) {
    return (
      <>
        {props.children}
        <style jsx global>{`
          html, body, #__next {
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
    )
  }
  
  export default Layout;