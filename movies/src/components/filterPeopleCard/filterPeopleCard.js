import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import img from "../../images/pexels-dziana-hasanbekava-5480827.jpg";

const formControl = {
  margin: 1,
  minWidth: "100%",
  backgroundColor: "rgb(255, 255, 255)",
};

export default function FilterPeopleCard({ onUserInput, titleFilter = "" }) {
  const handleTextChange = (e) => {
    onUserInput("name", e.target.value);
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "auto",
        backgroundColor: "rgb(240, 240, 240)",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        overflow: "hidden",
      }}
      variant="outlined"
    >
      <CardMedia
        sx={{ height: 200 }}
        image={img}
        title="Filter"
      />
      <CardContent sx={{ textAlign: "center", padding: 3 }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "rgb(50, 50, 50)",
            marginBottom: 2,
          }}
        >
          <SearchIcon fontSize="large" sx={{ verticalAlign: "middle" }} /> Search
          Actors
        </Typography>
        <TextField
          sx={{ ...formControl }}
          id="filled-search"
          label="Enter actor's name"
          type="search"
          variant="filled"
          value={titleFilter}
          onChange={handleTextChange}
        />
      </CardContent>
    </Card>
  );
}
