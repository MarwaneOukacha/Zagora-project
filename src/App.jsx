
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import IndexPage from "./page/IndexPage"
import { useEffect, useState } from "react";
import Excursion from "./components/Excursion";
import Home from "./page/Home";
import JsonData from "./data/data.json";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = ({data}) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    }, [data]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/excursion/:id" element={<Excursion data={landingPageData.Excurtion} />} />
        </Route>
      </Routes>
    </div>
  );

};

export default App;
