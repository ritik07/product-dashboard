import React, { useState } from 'react'
import './pagination.css'

const Pagination = ({ totalItems = 100, itemPerPage = 10, handleClick }) => {
  const [currentPage, setCurrentPage] = useState(1)
  let totalBtns = Math.ceil(totalItems / itemPerPage)

  const handlePgClick = (page) => {
    setCurrentPage(page)
    handleClick(page)
  }

  return (
    <div className='filter-card'>
      <button disabled={currentPage === 1} className='pagination-btn cursor-pointer' onClick={() => handlePgClick(currentPage - 1)} >
        Prev
      </button>

      {Array.from({ length: totalBtns }, (_, index) => {
        return <button className={`pagination-btn cursor-pointer ${currentPage === index + 1 ? " acitve" : ""}`} key={index} onClick={() => handlePgClick(index + 1)}>
          {index + 1}
        </button>
      })}


      <button disabled={currentPage === totalBtns} onClick={() => handlePgClick(currentPage + 1)} className='pagination-btn cursor-pointer'>
        Next
      </button>

    </div>
  )
}

export default Pagination