import React, { useEffect, useState } from "react";
import PageTemplate from '../components/templateMovieListPage';
const WatchlistPage = () => {
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedWatchlist);
  }, []);
  return (
    <PageTemplate
      title="My Watchlist"
      movies={watchlist}
      action={(movie) => {
        return <>
        </>;
      }}
    />
  );
};
export default WatchlistPage;