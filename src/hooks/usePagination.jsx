import { useState } from "react";

export function usePagination(array, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(itemsPerPage);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = array.slice(indexOfFirstCountry, indexOfLastCountry);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return {
    currentCountries,
    nextPage,
    prevPage,
    currentPage,
    indexOfLastCountry,
  }
}