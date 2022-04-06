//import logo from './logo.svg';
import "./App.css";
import Home from "./component/home";
import Carddetail from "./component/carddetail";
import { Route, Routes } from "react-router-dom";
import Menu from "./component/menu";
import Product from "./component/product";
import Mcq from "./component/mcq";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>
        <Route path="/" exact="true" element={<Home />}></Route>
        <Route path="/mcq" exact="true" element={<Mcq />}></Route>
        <Route path="/product/:id" exact="true" element={<Product />}></Route>
        <Route
          path="/carddetail/"
          exact="true"
          element={<Carddetail />}
        ></Route>
        <Route path="*" element={<P404 />}></Route>
      </Routes>
    </div>
  );
}

export function P404() {
  return <div>Page Not Found</div>;
}

export default App;
