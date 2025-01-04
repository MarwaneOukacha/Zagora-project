import React, { useState } from 'react';
import '../Excursion.css';

const Excursion = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [numberOfPersons, setNumberOfPersons] = useState(1); // Default to 1 person
  const pricePerPerson = 50; // Price per person in currency units

  const desertImages = [
    '../../img/perso_img/IMG-20250103-WA0011.jpg',
    '../../img/perso_img/IMG-20250103-WA0012.jpg',
    '../../img/perso_img/IMG-20250103-WA0013.jpg',
    '../../img/perso_img/IMG-20250103-WA0015.jpg',
  ];

  const totalPrice = numberOfPersons * pricePerPerson;

  const handleIncrease = () => setNumberOfPersons(numberOfPersons + 1);
  const handleDecrease = () => {
    if (numberOfPersons > 1) {
      setNumberOfPersons(numberOfPersons - 1);
    }
  };

  return (
    <div className="desert-card">
      <div className="desert-card-content">
        {/* Left side - Photo Gallery */}
        <div className="desert-gallery">
          <div className="main-image">
            <img
              src={desertImages[activeImage]}
              alt={`Desert view ${activeImage + 1}`}
            />
            <button className="like-button">❤</button>
          </div>
          <div className="thumbnail-grid">
            {desertImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`thumbnail ${activeImage === index ? 'active' : ''}`}
              >
                <img src={image} alt={`Desert thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Title, Description, and Pricing */}
        <div className="desert-info">
          <h1>Le Sahara Marocain</h1>
          <div className="underline"></div>
          <p className="description">
            Le Sahara marocain est une région fascinante qui offre des paysages
            à couper le souffle. Avec ses vastes étendues de dunes dorées, ses
            oasis verdoyantes et ses nuits étoilées magiques, c'est un endroit
            unique où la nature dévoile toute sa splendeur.
          </p>

          <div className="points-of-interest">
            <h2>Points d'intérêt</h2>
            <ul>
              <li>📍 Les dunes de Merzouga</li>
              <li>📍 La vallée du Drâa</li>
              <li>📍 Les oasis de Zagora</li>
              <li>📍 Les camps nomades traditionnels</li>
            </ul>
          </div>

          <div className="best-time-to-visit">
            <h3>🗓 Meilleure période pour visiter</h3>
            <p>
              D'octobre à avril, lorsque les températures sont plus clémentes et
              que les conditions sont idéales pour l'exploration du désert.
            </p>
          </div>

          {/* Added increment tool for number of persons */}
          <div className="pricing-info">
            <h3>Tarifs</h3>
            <div className="person-control">
              <button
                onClick={handleDecrease}
                disabled={numberOfPersons <= 1}
                className="person-control-button"
              >
                -
              </button>
              <span className="person-count">{numberOfPersons} Personne{numberOfPersons > 1 ? 's' : ''}</span>
              <button
                onClick={handleIncrease}
                className="person-control-button"
              >
                +
              </button>
            </div>
            <p>Prix par personne : <strong>{pricePerPerson}€</strong></p>
            <p>Prix total : <strong>{totalPrice}€</strong></p>
          </div>

          <div className="rating">
            ⭐⭐⭐⭐⭐ <span>4.8 (120 avis)</span>
          </div>

          <button className="book-button">
            Réserver votre aventure dans le désert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Excursion;
