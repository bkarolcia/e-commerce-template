import MainPage from "./components/MainPage";
import AllProducts from "./components/AllProducts";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/products">
            <AllProducts />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
