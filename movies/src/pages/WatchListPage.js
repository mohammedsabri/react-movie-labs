import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import RemoveFromWatchlist from "../components/cardIcons/removeFromWatchlist";
import { Typography, Box } from "@mui/material";

const WatchlistPage = () => {
  const [watchlist, setWatchlist] = useState([]);


 
  // Load watchlist from localStorage
  useEffect(() => {
    try {
      const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      setWatchlist(storedWatchlist);
    } catch (error) {
      console.error("Error loading watchlist from localStorage", error);
      setWatchlist([]);
    }
  }, []);

  // Remove a movie from the watchlist
  const handleRemove = (movieId) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  // Handle empty watchlist
  if (watchlist.length === 0) {
    return (
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Typography variant="h4">Your Watchlist is Empty</Typography>
        <Typography variant="body1">Add some movies to your watchlist to see them here!</Typography>
      </Box>
    );
  }

  return (
    <PageTemplate
      title="My Watchlist"
      movies={watchlist}
      action={(movie) => (
        <RemoveFromWatchlist movie={movie} onRemove={handleRemove} />
      )}
    />
  );
};

export default WatchlistPage;
