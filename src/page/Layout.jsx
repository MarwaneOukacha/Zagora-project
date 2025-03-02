import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Navigation } from "../components/navigation";
import { Outlet } from "react-router-dom";
import JsonData from "../data/data.json";

export default function Layout() {
    const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navbar navbar={landingPageData.navbar}></Navbar>
      <Outlet />
    </div>
  );
}
