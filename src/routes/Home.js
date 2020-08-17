import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Home.css";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState({
    isLoading: true,
    movies: [],
  });

  const movieList = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // console.log(movies);
    setLoading({ movies, isLoading: false });
  };

  useEffect(() => {
    movieList();
  }, []);

  const { isLoading, movies } = loading;

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => {
            // console.log(movie);
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
export default Home;
