import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './LayoutContainer.css';
import { useSelector } from 'react-redux';

const LayoutContainer = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="">
      <header className="header">
        <Link to="/">
          <h1 className="header-title cursor-pointer">Product Management Dashboard</h1>
        </Link>
        <nav className="header-nav">
          <ul className="nav-list">
            <Link to="/favorites">
              <li className="nav-item cursor-pointer">Favorites {favorites.length ? (favorites.length) : null} </li>
            </Link>
          </ul>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutContainer;
