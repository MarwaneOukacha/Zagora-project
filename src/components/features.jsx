import React, { useEffect, useState } from "react";
import '../Features.css';  // Import the CSS file
import { CiCircleMore } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

export const Features = ({ products }) => {  // Destructure 'products' prop correctly
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (products) {
      setData(products);
      console.log(data);  // Note: This may log outdated data due to useState's async nature
    }
  }, [products]);

  const handleViewMore = () => {
    navigate('/view-more');
  };

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-[#2D2D2D]">
                BALDI ZAG
              </h1>
            </div>

            {/* Tifinagh Text */}
            <div className="pt-4">
              <h2 className="text-2xl md:text-3xl font-medium">X.l.* ⵛ*O</h2>
            </div>

            {/* French Subtitle */}
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-[#2D2D2D] uppercase tracking-wide">
                Baldi Zag. Traditional Moroccan ART, Unique, Trendy, Handmade.
              </h3>
            </div>

            {/* Delivery Text */}
            <p className="text-gray-600 text-lg md:text-xl pt-4">We deliver everywhere in Morocco for free.</p>

            {/* Collections Title */}
            <h4 className="text-xl md:text-2xl font-semibold text-[#2D2D2D] pt-8">--COLLECTIONS--</h4>
          </div>
        </div>
        <div className="row">
          {data.map((product, index) => (
            <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="pt-8">
          <button
            onClick={handleViewMore}
            className="text-green-700 font-bold text-lg cursor-pointer">
            View More <CiCircleMore className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
