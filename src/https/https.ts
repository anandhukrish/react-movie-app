import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
    accept: "application/json",
  },
});

//? https://api.themoviedb.org/3/trending/all/day?language=en-US
