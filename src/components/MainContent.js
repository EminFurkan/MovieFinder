import React, { useState } from 'react';
import '../styles/MainContent.sass';
import axios from 'axios';
import { Search } from './Search';
import { MovieList } from './MovieList';
import { Banner } from './Banner';
import { MovieDetails } from './MovieDetails';

export const MainContent = () => {
  const api = 'http://omdbapi.com/?apikey=359bdefa'
  const [search, setSearchState] = useState({
    input: '',
    results: [],
    selected: {},
    state: false,
    details: false
  });

  // Async - Await syntax requires @Babel/polyfill dependency which I didn't include at this time
  const handleRequest = e => {
    if (e.key === 'Enter'){
      axios(api + `&s=${search.input}`)
        .then(({ data }) => {
          const results = data.Search;
          const updatedState = {...search, results: results, state: true }
          setSearchState(updatedState);
        });   
    }
  }

  const handleSearch = e => {
    let input = e.target.value;
    const updatedState = {...search, input: input}
    setSearchState(updatedState);
  }

  const openDetails = id => {
    axios(api + `&i=${id}`)
      .then(({ data }) => {
        const result = data
        const updatedState = {...search, selected: result, details:true}
        setSearchState(updatedState);
        console.log(id)
      })
  }

  const closeDetails = () => {
    setSearchState(search => {
      return {...search, selected: {}, details: false}
    })
  }

  let displayResult;

  if (search.details){
    displayResult = (<MovieDetails selected={search.selected} closeDetails={closeDetails} />);
    console.log(displayResult)
  } else {
    displayResult = (<MovieList results={ search.results } openDetails={openDetails} /> );
  }

  return (
    <div className="content-wrapper">
      <Banner searchState={ search.state } />
      <Search handleSearch={ handleSearch } handleRequest={ handleRequest } searchState={ search.state } />
      { displayResult }
    </div>
  )
}