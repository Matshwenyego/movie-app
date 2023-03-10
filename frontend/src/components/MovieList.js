import React from "react";
import { Grid, Container } from "@mui/material";
import MovieListItem from "./MovieListItem";

export default function MovieList(props) {
  const {
    data = [],
    handleAddToList,
    savedMoviesMap = {},
    handleRemoveFromList,
  } = props;
  return (
    <Container maxWidth="xl" sx={{ pt: 2 }}>
      <Grid container spacing={2}>
        {data.map((item, index) => {
          const addedToList = savedMoviesMap[item.imdbID] ? true : false;
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              key={item.imdbID + index}
            >
              <MovieListItem
                title={item.Title}
                year={item.Year}
                imdbID={item.imdbID}
                poster={item.Poster}
                type={item.Type}
                handleAddToList={handleAddToList}
                action={addedToList ? "remove" : "add"}
                handleRemoveFromList={handleRemoveFromList}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
