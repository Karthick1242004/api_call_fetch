import React, { useState } from 'react';

function ReactWindowScroll() {
  const divsArray = Array.from({ length: 5000 });
  const [currentPage, setCurrentPage] = useState(1);
  const divsPerPage = 100; // Adjust this number based on how many divs you want per page.

  // Calculate the indexes for slicing the array
  const indexOfLastDiv = currentPage * divsPerPage;
  const indexOfFirstDiv = indexOfLastDiv - divsPerPage;
  const currentDivs = divsArray.slice(indexOfFirstDiv, indexOfLastDiv);

  const totalPages = Math.ceil(divsArray.length / divsPerPage);

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div style={{ overflow: 'scroll', height: '100vh' }}>
        {currentDivs.map((_, index) => (
          <div key={indexOfFirstDiv + index} style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
            Div number {indexOfFirstDiv + index + 1}
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <button onClick={handlePrevPage} disabled={currentPage === 1} style={{ marginRight: '10px' }}>
          Previous
        </button>
        <span style={{ margin: '0 20px' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ReactWindowScroll;
