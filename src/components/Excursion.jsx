import React, { useEffect, useState } from 'react';
import '../Excursion.css';
import { useParams } from 'react-router-dom';

const Excursion = ({ data }) => {
  const { id } = useParams(); // Extract the dynamic ID from the URL
  const excursion = data[id - 1];
  const [activeImage, setActiveImage] = useState(0);
  const [numberOfPersons, setNumberOfPersons] = useState(1); // Default to 1 person
  const pricePerPerson = 50; // Price per person in currency units



  const totalPrice = numberOfPersons * pricePerPerson;

  const handleIncrease = () => setNumberOfPersons(numberOfPersons + 1);
  const handleDecrease = () => {
    if (numberOfPersons > 1) {
      setNumberOfPersons(numberOfPersons - 1);
    }
  };


  useEffect(() => {
    console.log(excursion.title);
  }, []);

  return (
    <div className="desert-card">
      <div className="desert-card-content">
        {/* Left side - Photo Gallery */}

        <div className="desert-gallery">
          <div className="main-image">
            <img
              src={excursion.desertImages[activeImage]}
              alt={`Desert view ${activeImage + 1}`}
            />
            <button className="like-button">❤</button>
          </div>
          <div className="thumbnail-grid">
            {excursion.desertImages.map((image, index) => (
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
          <h1>{excursion.title}</h1>
          <div className="underline"></div>
          <p className="description">
            {excursion.description}
          </p>

          <div className="points-of-interest">
            <h2>Points d'intérêt</h2>
            <ul>
              {excursion.PointsInteret.map((point, index) => (
                <li>📍 {point}</li>))
              }
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
