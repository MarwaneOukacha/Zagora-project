import React from "react";
import '../style/about.css'; // Import the CSS file for styling

export default function About() {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="about-card">
          <h1 className="about-title">
            Baldi ZAG, The Traditional Moroccan Lifestyle Revisited!
          </h1>

          <div className="about-text">
            <p>
              In recent years, Moroccan craftsmanship has become increasingly popular around the world, especially in the field of interior decoration. Today, Moroccan craftsmanship is renowned globally, and the inspirations, innovations, creativity, and talent of the finest Moroccan artisans are impossible to overlook. As a passionate advocate of this rich and varied craftsmanship, Baldi ZAG showcases "Handmade in Morocco" through a range of creations that continue to innovate, bringing extraordinary products to life.
            </p>

            <p>
              Baldi ZAG invites you to experience the subtle beauty of traditional craftsmanship! Moroccan craftsmanship, rooted in purely ancestral processes, explicitly highlights the cultural heritage of Morocco.
            </p>
          </div>
        </div>
      </section>

      {/* New Section Added */}
      <section className="about-section">
        <div className="about-card">
          <h1 className="about-title">
            Baldi ZAG, Trendy, By the Artisan Directly!
          </h1>

          <div className="about-text">
            <p>
              From tableware to interior decoration and even genuine lifestyle, Moroccan craftsmanship has become a true fashion phenomenon. The artisans from the High Atlas mountains have managed to create objects that are both functional and exceptionally decorative, aiming to conquer the high-end international market while staying true to their millennia-old traditions. The country's cultural and identity diversity is expressed through its various handcrafted objects.
            </p>

            <p>
              Baldi ZAG collaborates with several families from the High Atlas to promote artisanal products of exceptional quality. Our policy also aims to promote original and unique products from the Moroccan craftsmanship sector.
            </p>

            <p>
              Baldi ZAG reimagines for you the traditional Moroccan lifestyle with trendy and chic items, inheriting the artisanal know-how of Morocco.
            </p>

            <p>
              Baldi ZAG invites you to discover unique products, created directly from the skills of Moroccan craftsmanship. Our online Moroccan artisan shop is a rich, varied, and exclusive universe, with well-thought-out touches, managing to adapt the respect for tradition to the contemporary world. Behind each item for sale is an exceptional ancestral story.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
