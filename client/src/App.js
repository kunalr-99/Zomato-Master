import HomeLayoutHOC from "./HOC/Home.HOC";
import "./App.css";
import Temp from "./Component/Temp";
import Master from "./Component/Master";

const App = () => {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
      <HomeLayoutHOC path="/:type" exact component={Master} />
    </>
  );
};

export default App;
