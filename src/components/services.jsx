import React from "react";
import { FaTruck, FaCreditCard, FaWallet, FaPalette, FaHeadphones, FaAward } from "react-icons/fa";

export const Services = () => {
  const services = [
    {
      icon: <FaTruck className="w-12 h-12" />,
      title: "FAST AND FREE DELIVERY",
      description: "Free delivery anywhere in Morocco within 72 hours.",
    },
    {
      icon: <FaCreditCard className="w-12 h-12" />,
      title: "PAYMENT ON DELIVERY",
      description: "Pay when you receive the product and check it before paying.",
    },
    {
      icon: <FaWallet className="w-12 h-12" />,
      title: "MONEY-BACK GUARANTEE",
      description:
        "You are entitled to a refund if you're not satisfied with the product due to our refund policy. Click to learn more.",
    },
    {
      icon: <FaPalette className="w-12 h-12" />,
      title: "YOUR CUSTOM DESIGN",
      description:
        "We can weave your custom design—just contact us! Click to learn more.",
    },
    {
      icon: <FaHeadphones className="w-12 h-12" />,
      title: "24/7 CUSTOMER SUPPORT",
      description:
        "We are happy to assist you via phone and answer all your questions 24/7.",
    },
    {
      icon: <FaAward className="w-12 h-12" />,
      title: "PREMIUM QUALITY",
      description: "We always check the quality of our products before shipping.",
    },
  ];

  const iconMap = {
    FaTruck: <FaTruck className="GiCampingTent" />,
    FaCreditCard: <FaCreditCard className="GiCampingTent" />,
    FaWallet: <FaWallet className="GiCampingTent" />,
    FaPalette: <FaPalette className="GiCampingTent" />,
    FaHeadphones: <FaHeadphones className="GiCampingTent" />,
    FaAward: <FaAward className="GiCampingTent" />
  };
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
            {/* French Subtitle */}
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-[#2D2D2D] uppercase tracking-wide">
                We ensure the highest quality control before shipping each product.
              </h3>
            </div>

            {/* Delivery Text */}
            <p className="text-gray-600 text-lg md:text-xl pt-4">Pay when the product is delivered and check it before you pay.</p>
          </div>
        </div>
        <div className="row">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            {services.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="rounded-full border-4 border-gray-300 p-8 mb-8">{feature.icon}</div>
                <h3 className="font-bold text-2xl mb-6">{feature.title}</h3>
                <p className="text-gray-700 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
