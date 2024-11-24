// import React from "react";
// import { getRecommendations } from "../api/tmdb-api";
// import PageTemplate from '../components/templateMovieListPage';
// import { useQuery } from 'react-query';
// import Spinner from '../components/spinner';
// import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
// // import AddToWatchlistIcon from '../components/cardIcons/addToWatchlist';
// // const MoviePage = (props) => {
// //   const { id } = useParams();
// //   const { data: movie, error, isLoading, isError } = useQuery(
// //     ["movie", { id: id }],
// //     getMovie
// //   );
// const RecommendationsPage = ({ movieId }) => {
//   const { data, error, isLoading, isError } = useQuery(['recommendations',  {id: movieId }],  getRecommendations );
 

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }

//   // Use optional chaining to safely access `data.results`
//   const movies = data?.results || [];
// console.log(movies)
//   return (
//     <PageTemplate
//       title="Recommended Movies"
//       movies={movies}
//       action={(movie) => (
//         <>
//           <AddToFavoritesIcon movie={movie} />
//           {/* <AddToWatchlistIcon movie={movie} /> */}
//         </>
//       )}
//     />
//   );
// };

// export default RecommendationsPage;