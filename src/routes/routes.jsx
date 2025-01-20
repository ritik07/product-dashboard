import LayoutContainer from "../components/layout/LayoutContainer";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import FavoritesPage from "../pages/favorites/Favorites";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        <Route index element={<Dashboard />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
