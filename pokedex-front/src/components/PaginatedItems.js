import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import PokemonTable from './PokemonTable';
import usePokemonLinks from '../hooks/usePokemonLinks';

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function PaginatedItems() {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [pokemonArray, loading] = usePokemonLinks(1);
   

  const endOffset = itemOffset + 10;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = pokemonArray.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(pokemonArray.length / 10);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
      const newOffset = (event.selected * 10) % pokemonArray.length;
      console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
  };

  if (loading) {
    return null;
  }
  return (
    <>
      <PokemonTable pokemonArray={pokemonArray}/>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}  



export default PaginatedItems;