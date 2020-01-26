import Layout from 'components/Layout';

const Index = () => (
    <Layout>
    <div className="container">
        <div className="inner">
            <div className="circle"></div>
            <h1>emma bäckström</h1>
            <p>I move between technology and design to create great products.{` `} 
                <a href="mailto:hello@emmabackstrom.com?subject=Hey, I saw your website ...">Say hello</a> or{` `}
                <a href="https://www.linkedin.com/in/emmabackstrom">connect</a>.
            </p>
        </div>
     <style jsx>{`
     .container {
         position: relative;
         height: 100%;
         display: flex;
         flex-direction: row;
         align-items: center;
         justify-content: center;
         text-align: center; 
     }
     .inner {
         max-width: 450px;
     }
     p {
         font-family: "Trebuchet MS", Helvetica, sans-serif;
     }
     h1 {
         font-size: 2.5em;
        font-family: 'courier';
        margin: 0;
      }
    a, a:visited, a:active {
        color: blue;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
     `}</style>
    </div>
    </Layout>
  );
  
  export default Index;
  