import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { fetchProducts } from '../../services/product/product';
import ProductCard from '../../components/productCard/ProductCard';
import './Dashboard.css';
import FilterCard from '../../components/filterCard/FilterCard';
import Pagination from '../../components/pagination/Pagination';

const itemPerPage = 10;

const Dashboard = () => {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    try {
      let response = await fetchProducts();
      setProductData(response);

      const uniqueCategories = [...new Set(response.map((product) => product.category))];
      setCategories(['All', ...uniqueCategories]);
    } catch (error) {
      console.log('Error fetching products', error);
    }
  };

  const handlePageClick = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handleCategoryChange = useCallback((event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  }, []);

  const handleSortChange = useCallback((event) => {
    setSortOption(event.target.value);
    setCurrentPage(1);
  }, []);

  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All'
      ? productData
      : productData.filter((product) => product.category === selectedCategory);
  }, [productData, selectedCategory]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortOption === 'priceAsc') {
        return a.price - b.price;
      } else if (sortOption === 'priceDesc') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
  }, [filteredProducts, sortOption]);

  const indexOfLastProduct = currentPage * itemPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemPerPage;
  const currentProducts = useMemo(() => {
    return sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [sortedProducts, indexOfFirstProduct, indexOfLastProduct]);

  return (
    <div>
      <FilterCard
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        sortOption={sortOption}
        onSortChange={handleSortChange}
      />

      <div className="product-grid">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="pagination-container">
        <Pagination
          totalItems={sortedProducts.length}
          itemsPerPage={itemPerPage}
          handleClick={handlePageClick}
        />
      </div>
    </div>
  );
};

export default Dashboard;
