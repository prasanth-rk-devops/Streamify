import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/details/${id}`)
      .then(res => setMovie(res.data));
  }, [id]);

  if (!movie) return <h3>Loading...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={`/images/${movie.poster}`}
        width="300"
        alt={movie.title}
      />
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p><b>Category:</b> {movie.category}</p>
    </div>
  );
}
