import Header from "../header/header";
import Recipes from "../../recipes/recipes";
import Footer from "../footer/footer";
import StartReact from "../../start-react/start-react";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <StartReact />
      <Recipes />
      <Footer />
    </div>
  );
};

export default App;
