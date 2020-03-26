import React from 'react';
import '../styles/Banner.sass';

export const Banner = ({ searchState }) => {
  return (
    <div className={searchState ? 'banner off' : 'banner'}>
    </div>
  )
}