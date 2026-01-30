import { useEffect, useState } from "react";
import { getMovies } from "../services/api";
import MovieCard from "./MovieCard";

export default function MovieRow({ title, category }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(category).then(setMovies);
  }, [category]);

  return (
    <>
      <h2>{title}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {movies.map(m => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </>
  );
}
