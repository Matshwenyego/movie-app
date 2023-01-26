import React, { useState } from "react";
import { Button, Container, Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function MovieFilters(props) {
  const { handleSearchMovies } = props;
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) {
      alert("Please provide movie title");
      return;
    }
    handleSearchMovies({ s: title });
  };

  return (
    <Container maxWidth="xl" sx={{ pb: 2 }}>
      <Box
        component={"form"}
        sx={{ display: "flex", alignItems: "flex-end" }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Movie Title"
          variant="standard"
          fullWidth
          sx={{ mr: 1 }}
          size="small"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Button
          sx={{ minWidth: "100px" }}
          type="submit"
          startIcon={<SearchIcon />}
          variant="outlined"
        >
          Search
        </Button>
      </Box>
    </Container>
  );
}
