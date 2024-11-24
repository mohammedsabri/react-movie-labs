import React from "react";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom"

function MovieRecommendations({ movies }) {
  return (
    <Grid container spacing={2} padding={2}>
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
          <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {movie.title}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieRecommendations;