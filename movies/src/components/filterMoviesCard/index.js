import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const formControl = {
  margin: 1,
  minWidth: "100%",
};

export default function FilterMoviesCard(props) {
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = (e) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <Card
      sx={{
        backgroundColor: "rgb(245, 245, 245)",
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
      }}
      variant="outlined"
    >
      <CardMedia
        sx={{
          height: 200,
          position: "relative",
        }}
        image={img}
        title="Filter"
      >
        <Typography
          sx={{
            position: "absolute",
            bottom: 10,
            left: 20,
            color: "#fff",
            fontWeight: "bold",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
          }}
          variant="h5"
        >
          Find Your Favorite Movies
        </Typography>
      </CardMedia>

      <CardContent>
        <Paper
          elevation={2}
          sx={{
            padding: 2,
            marginY: 2,
            backgroundColor: "#fff",
            borderRadius: 1,
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{ marginBottom: 2, fontWeight: "bold" }}
          >
            <SearchIcon sx={{ marginRight: 1 }} />
            Search and Filter
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              id="filled-search"
              label="Search by Name"
              type="search"
              variant="outlined"
              value={props.titleFilter}
              onChange={handleTextChange}
              sx={{ ...formControl }}
            />

            <FormControl sx={{ ...formControl }}>
              <InputLabel id="genre-label">Genre</InputLabel>
              <Select
                labelId="genre-label"
                id="genre-select"
                value={props.genreFilter}
                onChange={handleGenreChange}
              >
                {genres.map((genre) => (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Paper>
      </CardContent>
    </Card>
  );
}
