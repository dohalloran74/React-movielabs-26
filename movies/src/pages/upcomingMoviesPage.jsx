import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
//same name as getUpcomingMovies in tmdb-api.jsx

//create upcoming movies page component
const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  
  const upcomingMovies  = movies.filter(m => m.favorite)
  localStorage.setItem('upcoming', JSON.stringify(upcomingMovies))

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };
//
   useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });         
  }, []);

//
  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      selectFavorite={addToFavorites}
    />
  );
};
//export default UpcomingMoviesPage;
export default UpcomingMoviesPage;
