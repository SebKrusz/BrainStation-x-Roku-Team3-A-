// import { useEffect, useState } from "react";
// import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ThemePage } from "./pages/ThemePage/ThemePage";
import { Moviemoodpage } from "./pages/Moviemoodpage/Moviemoodpage";
import "./styles/global.scss";

function App() {
  // const [movies, setMovies] = useState({});
  // const [searchInput, setSearchInput] = useState(" ");

  // const getMovies = async genre => {
  //   const options = {
  //     method: "GET",
  //     url: "https://moviesdatabase.p.rapidapi.com/titles",
  //     params: {
  //       genre: genre,
  //       limit: "4",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": "d3747e1f5dmsh9b2a12090a61863p1a143djsn4363843076e2",
  //       "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  //     },
  //   };
  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //     setSearchInput(response.data);
  //     setMovies(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const handleSearch = event => {
  //   setSearchInput(event.target.value);
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   getMovies(searchInput);
  // };
  // useEffect(() => {
  //   getMovies("Drama");
  // }, []);

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" placeholder="genre" value={searchInput} onChange={handleSearch} />
        <button type="submit">Go</button>
      </form>
      <div>{movies.titleText.text}</div> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/theme" element={<ThemePage />} />
          <Route path="/genre/:selectedGenre" element={<Moviemoodpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
