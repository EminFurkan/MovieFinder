import React from 'react';
import '../styles/Search.sass';
import { GoSearch } from "react-icons/go";

export const Search = ({ handleSearch }) => {
  return (
    <section className="search">
      <input
        type="text"
        placeholder="Search for a title"
        className="searchbar" 
        onChange={ handleSearch }
      />
      <div className="search-icon">
        <GoSearch />
      </div>
    </section>
  )
}