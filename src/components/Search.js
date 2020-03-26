import React from 'react';
import '../styles/Search.sass';
import { GoSearch } from "react-icons/go";

export const Search = ({ handleSearch, handleRequest, searchState }) => {

  return (
    <section className={ searchState ? 'search swipe-up' : 'search' }>
      <input
        type="text"
        placeholder="Search for a title e.g. Batman"
        className="searchbar" 
        onChange={ handleSearch }
        onKeyPress={ handleRequest }
      />
      <div className="search-icon">
        <GoSearch />
      </div>
    </section>
  )
}