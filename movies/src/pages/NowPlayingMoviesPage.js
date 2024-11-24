import React, { useState } from "react";
import { useQuery } from "react-query";
import { getNowplayingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddToToWatchListIcon from "../components/cardIcons/addToToWatchlist";
// import Pagination from "@mui/material/Pagination";

const NowplayingMoviesPage  = () => {
  const [page, setPage] = useState(1); // State for pagination

  // Fetch trending movies using react-query
  const { data, error, isLoading, isError } = useQuery(
    ["nowplaying Movies", page], // Query key includes page to refetch on change
    () => getNowplayingMovies(page), // Fetch function with page parameter
    { keepPreviousData: true } // Keep data from previous pages during loading
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // if (isError) {
  //   console.error(error);
  //   return (
  //     <div style={{ textAlign: "center", padding: "2rem" }}>
  //       <h1>Error Loading Data</h1>
  //       <p>{error.message || "An unexpected error occurred. Please try again later."}</p>
  //     </div>
  //   );
  // }

  // if (!data || !data.results || data.results.length === 0) {
  //   return (
  //     <div style={{ textAlign: "center", padding: "2rem" }}>
  //       <h1>No Now playing Movies Found</h1>
  //       <p>Check back later for the latest now playin movies.</p>
  //     </div>
  //   );
  // }

  const movies = data.results; // Extract movies from API response
  const totalPages = data.total_pages; // Extract total pages for pagination

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value); // Update page state
  };

  return (
    <>
      <PageTemplate
        title="Now Playing Movies"
        movies={movies}
        action={(movie) => (
          <>
            <AddToToWatchListIcon movie={movie} />
          </>
        )}
      />
      {/* Pagination component */}
      {/* <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color="primary"
        showFirstButton
        showLastButton
        style={{
          paddingBottom: "20px",
          paddingTop: "20px",
          justifyContent: "center",
          display: "flex",
        }}
      /> */}
    </>
  );
};

export default NowplayingMoviesPage;
