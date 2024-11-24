import React, { createContext, useState } from "react";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie.id]);
  };

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie.id]);
  };

  return (
    <MoviesContext.Provider value={{ favorites, addToFavorites, watchlist, addToWatchlist }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
