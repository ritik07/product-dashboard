import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";

const useFavorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const addToFavorites = (product) => {
    if (!favorites.some((item) => item.id === product.id)) {
      dispatch(addFavorite(product));
    }
  };

  const removeFromFavorites = (productId) => {
    dispatch(removeFavorite(productId));
  };

  const isFavorite = (productId) =>
    favorites.some((item) => item.id === productId);

  return { favorites, addToFavorites, removeFromFavorites, isFavorite };
};

export default useFavorites;
