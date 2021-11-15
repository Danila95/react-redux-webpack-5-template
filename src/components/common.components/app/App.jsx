import Header from "../header/header";
import FirstStartWebpack from "../../first-start-webpack/first-start-webpack";
import StartReact from "../../start-react/start-react";
import Recipes from "../../recipes/recipes";
import Footer from "../footer/footer";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <FirstStartWebpack />
      <StartReact />
      <Recipes />
      <Footer />
    </div>
  );
};

export default App;
