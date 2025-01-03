import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import IndexPage from "./page/IndexPage"
import Login from "./components/Login";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About data={landingPageData.About} />} />
          <Route path="/services" element={<Services data={landingPageData.Services} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials data={landingPageData.Testimonials} />} />
          <Route path="/team" element={<Team data={landingPageData.Team} />} />
          <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
        </Route>
      </Routes>
    </div>
  );

};

export default App;
