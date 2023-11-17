import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Moviemoodpage = () => {
  const [movieData, setMovieData] = useState([]);
  const { selectedGenre } = useParams();

  useEffect(() => {
    if (selectedGenre) {
      axios
        .get(`http://localhost:8080/genre/${selectedGenre}`)
        .then(response => {
          setMovieData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error("Error fetching movie data:", error);
        });
    }
  }, [selectedGenre]);

  return (
    <div>
      <h1>Choose a genre to see movies:</h1>
      <label>Select a genre:</label>
      <select id="genre" name="genre" value={selectedGenre}>
        <option value="">-- Select Genre --</option>
        {movieData.map(genreData => (
          <option key={genreData.genre} value={genreData.genre}>
            {genreData.genre}
          </option>
        ))}
      </select>

      {selectedGenre && (
        <div>
          <h2>Movies in the {selectedGenre} genre:</h2>
          <ul>
            {movieData.map(movie => (
              <li key={movie.title}>
                <h3>{movie.title}</h3>
                <p>Year: {movie.year}</p>
                <img src={movie.image} alt={movie.title} />
                <p>{movie.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
