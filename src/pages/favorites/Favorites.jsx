import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/productCard/ProductCard';
import { setFavorites } from '../../redux/favoritesSlice';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  useEffect(() => {
    // Fetch the favorite products from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Dispatch to Redux to populate the store with favorites
    dispatch(setFavorites(storedFavorites));
  }, [dispatch]);

  return (
    <div>
      <h1>Favorites</h1>
      <div className="product-grid">
        {favorites.length === 0 ? (
          <p>No favorite products found</p>
        ) : (
          favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
