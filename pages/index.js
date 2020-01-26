import Layout from "components/Layout";

const Hover = ({ children, words }) => {
  return <Layout>{children}</Layout>;
};

const Index = () => (
  <Layout>
    <div className="container">
      <div className="inner">
        <div>
          <div
            onMouseEnter={() =>
              console.log("Congrats, you managed to hover my name :)")
            }
          >
            <Hover
              words={[
                "develops for web",
                "takes care of plants",
                "designs user interfaces",
                "builds with code",
                "stops climate change",
              ]}
            >
              <h1>emma bäckström</h1>
            </Hover>
          </div>
        </div>
        <div className="cube" />
        <div>
          <div>
            <span className="text">
              I move between technology and design to create great products.
              {` `}
              <a href="mailto:canny-glories.0q@icloud.com?subject=Hey, I saw your website ...">
                Say hello
              </a>{" "}
              or{` `}
              <a href="https://www.linkedin.com/in/emmabackstrom">connect</a>.
            </span>
          </div>
        </div>
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
          display: flex;
          flex-direction: row;
          max-width: 850px;
        }
        .inner > div {
          width: 25%;
          display: flex;
        }
        .inner > div > div {
          padding: 0 20px;
        }
        .inner > div:first-child {
          align-self: flex-start;
          text-align: right;
        }
        .inner > div:last-child {
          align-self: flex-end;
          text-align: left;
        }
        .inner > .cube {
          width: 50%;
          height: 0;
          padding-top: 50%;
          background-color: #64939b;
          background-image: url("/img2.jpg");
          border-radius: 10px;
        }
        .text {
          font-family: "Trebuchet MS", Helvetica, sans-serif;
          line-height: 1.2;
          font-size: 0.8em;
          display: inline-block;
        }
        h1 {
          font-size: 1.5em;
          font-family: "courier";
          font-family: "Trebuchet MS", Helvetica, sans-serif;
          font-weight: bold;
          margin: 0;
          display: inline-block;
          line-height: 1.2;
        }
        a,
        a:visited,
        a:active {
          color: #64939b;
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
