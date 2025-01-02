import React from "react";
import '../Features.css';  // Import the CSS file
import { CiCircleMore } from "react-icons/ci";

export const Features = () => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 className="section-title-text">Zagora Desert Tours</h2>
        </div>
        <div className="row">
          <div key="1" className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card custom-card">
              {/* Card Image */}
              <img src="/img/5.jpg" className="card-img-top" alt="" />
              <CiCircleMore />

              <div className="card-body">
                {/* Card Title */}
                <h5 className="card-title">Begin from Zagora</h5>
                {/* Card Text / Paragraph */}
                <p className="card-text">
                  Zagora, the iconic gateway to the Sahara, boasts enchanting landscapes with its kasbahs, palm groves, and ancient traditions. Once a starting point for desert caravans, it invites you to explore the Moroccan desert. Acacia Voyages offers tailor-made tours for a unique experience, starting right from your accommodation.
                </p>
                {/* View More Button */}
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>

          <div key="2" className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card custom-card">
              {/* Card Image */}
              <img src="/img/1.jpg" className="card-img-top" alt="" />
              <div className="card-body">
                {/* Card Title */}
                <h5 className="card-title">Begin from Chigaga</h5>
                {/* Card Text / Paragraph */}
                <p className="card-text">
                  Erg Chigaga, one of the jewels of the Moroccan desert, stands out with its majestic dunes stretching as far as the eye can see, reaching heights of over 300 meters. Less frequented than Erg Chebbi, this destination offers an authentic and unspoiled experience, perfect for adventurers seeking true escape. Accessible only by 4x4, camelback, or on foot, Erg Chigaga reveals breathtaking panoramas, especially at sunrise and sunset. With Acacia Voyages, explore this wild paradise and be captivated by the serene silence and the magic of starry nights in the heart of the Sahara.
                </p>
                {/* View More Button */}
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>

          <div key="3" className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card custom-card">
              {/* Card Image */}
              <img src="/img/4.jpg" className="card-img-top" alt="" />
              <div className="card-body">
                {/* Card Title */}
                <h5 className="card-title">Begin from Ouarzazate</h5>
                {/* Card Text / Paragraph */}
                <p className="card-text">
                  Ouarzazate, known as the "Gateway to the Desert," is a city of captivating charm nestled at the crossroads of the Atlas Mountains and the Sahara. Famous for its cinematic landscapes, it hosts the renowned Atlas Studios, where many iconic films were shot. The city is also home to the magnificent Kasbah Taourirt, a UNESCO World Heritage Site that showcases Morocco's rich architectural heritage. Ouarzazate serves as the perfect starting point for exploring the nearby valleys, oases, and the breathtaking Erg Chigaga dunes. With Acacia Voyages, discover the magic of Ouarzazate and its surroundings, where history, culture, and natural beauty come together in perfect harmony.
                </p>
                {/* View More Button */}
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>

          {/* New Card for "View All Excursions" */}
          <div key="4" className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card custom-card">
              {/* Card Image */}
              <div className="card-img-top icon-container">
                <CiCircleMore className="more-icon" />
              </div>
              <div className="card-body">
                {/* Card Title */}
                <h5 className="card-title">Explore All Excursions</h5>
                {/* Card Text / Paragraph */}
                <p className="card-text">
                  Discover a wide range of tailored desert tours and excursions in the Moroccan Sahara. Whether you're looking for adventure, tranquility, or cultural experiences, Acacia Voyages has a tour that suits every traveler. Click below to explore all the exciting options available!
                </p>
                {/* View All Excursions Button */}
                <button className="btn btn-primary" onClick={() => window.location.href = "/all-excursions"}>
                  View All Excursions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
