import React, { useState } from 'react';
import '../styles/MainContent.sass';
import axios from 'axios';
import { Search } from './Search';

export const MainContent = () => {
  const api = 'http://omdbapi.com/?apikey=359bdefa'
  const [search, searchState] = useState({
    input: '',
    results: [],
    selected: {}
  });
  
  const handleRequest = async e => {
    if (e.key === 'Enter'){
      const data = await axios(api + `&s=${search.input}`);
      console.log(data);
    }
  }

  const handleSearch = e => {
    let input = e.target.value;
    const updatedState = {...search, input: input}
    searchState(updatedState);
    console.log(search.input)
  }

  return (
    <div className="content-wrapper">
      <Search handleSearch={ handleSearch } />
    </div>
  )
}