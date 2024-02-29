import React from 'react'

const Pagination = ({prevPage, nextPage, currentPage, indexOfLastCountry, countries}) => {
  return (
    <div>
        <button
          className="btnSearch"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Back
        </button>
        <button
          className="btnSearch"
          onClick={nextPage}
          disabled={indexOfLastCountry >= countries.length}
        >
          Next
        </button>
      </div>
  )
}

export default Pagination