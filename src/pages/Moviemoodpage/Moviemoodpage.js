import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Nav } from "../../components/Nav/Nav";
import { Footer } from "../../components/footer/Footer";

export const Moviemoodpage = () => {
  const staticHost = "http://localhost:8080/images/";
  const [movieData, setMovieData] = useState([]);
  const { selectedGenre } = useParams();
  const navigate = useNavigate();

  const handleGenreChange = event => {
    const selectedValue = event.target.value;
    navigate(`/genre/${selectedValue}`);
  };

  useEffect(() => {
    if (selectedGenre) {
      axios
        .get(`http://localhost:8080/genre/${selectedGenre}`)
        .then(response => {
          console.log("API Response:", response.data);
          setMovieData(response.data);
        })
        .catch(error => {
          console.error("Error fetching movie data:", error);
        });
    }
  }, [selectedGenre]);

  return (
    <div>
      <Nav />
      <div>
        <h1>Choose a genre to see movies:</h1>
        <label>Select a genre:</label>
        <select id="genre" name="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="" disabled>
            -- Select Genre --
          </option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Documentaries">Documentaries</option>
        </select>

      {selectedGenre && (
        <div>
          <h2>Movies in the {selectedGenre} genre:</h2>
          <ul>
            {movieData.map(movie => (
              <li key={movie.title}>
                <h3>{movie.title}</h3>
                <p>Year: {movie.year}</p>
                <img className="image" src={`${staticHost}${movie.image}`} alt={movie.title} />
                <p>{movie.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
