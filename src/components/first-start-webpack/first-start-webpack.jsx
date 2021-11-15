import Webpack from "../../images/webpack-logo.png";

const FirstStartWebpack = () => {
  return (
    <div className="container">
      <h1>First start Webpack</h1>
      <hr />
      <div className="logo">
        <img src={Webpack} alt="" />
        <h1>png loaded successfully</h1>
        <hr />
        <pre></pre>
        <hr />
        <div className="card">
          <h2>SCSS is work very well</h2>
        </div>
      </div>
    </div>
  );
};

export default FirstStartWebpack;
