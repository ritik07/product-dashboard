import React, { useState } from "react";
import useFavorites from "../../hooks/useFavorites";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteToggle = () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-wrapper">
        <img src={product.image} alt={product.title} className="image" />
      </div>
      <div className="details">
        <h3 className="title">{product.title}</h3>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
      </div>
      {isHovered && (
        <button
          className="favorite-button"
          onClick={handleFavoriteToggle}
        >
          {isFavorite(product.id) ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      )}
    </div>
  );
};

export default ProductCard;
