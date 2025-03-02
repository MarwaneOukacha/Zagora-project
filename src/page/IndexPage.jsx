import { useEffect, useState } from "react";

import { Header } from "../components/header";
import { Features } from "../components/features";
import { Services } from "../components/services";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import Navbar from "../components/Navbar";
import About from "../components/about";



export default function IndexPage() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>

      <Header data={landingPageData.Header} />
      <Features products={landingPageData.products} ></Features>
      <Services />
      <About />
      <Contact data={landingPageData.Contact} />
    </>

  );
}
