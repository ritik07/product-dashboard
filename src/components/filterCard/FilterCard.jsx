import React from 'react'
import './filterCard.css'

const FilterCard = ({ categories, selectedCategory, onCategoryChange, sortOption, onSortChange }) => {
  return (
    <div className="filter-card">
      <div className="filter-container">
        <label htmlFor="category-filter">Filter by Category: </label>
        <select id="category-filter" value={selectedCategory} onChange={onCategoryChange}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="sort-container">
        <label htmlFor="sort-filter">Sort by: </label>
        <select id="sort-filter" value={sortOption} onChange={onSortChange}>
          <option value="default">Default</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>
    </div>
  )
}

export default FilterCard
