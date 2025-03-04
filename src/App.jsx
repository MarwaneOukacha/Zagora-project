
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import IndexPage from "./page/IndexPage"
import Login from "./components/Login";
import { useEffect } from "react";
import Excursion from "./components/Excursion";
import Home from "./page/Home";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  useEffect(() => {

  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/excursion" element={<Excursion />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );

};

export default App;
