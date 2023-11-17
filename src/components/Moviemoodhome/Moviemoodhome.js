import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Moviemoodhome.scss";

export const Moviemoodhome = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const initialGenres = [
    "Action",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Horror",
    "Romance",
    "Thriller",
    "Animation",
  ];

  const handleGenreChange = event => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div>
      <h1>Ready to choose your movie mood?</h1>
      <label>Choose a genre:</label>
      <select id="genre" name="genre" value={selectedGenre} onChange={handleGenreChange}>
        {initialGenres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <Link to={`/Moviemood/${selectedGenre}`}>
        <button>Go to Other Page</button>
      </Link>
    </div>
  );
};
