export default function MovieCard({ movie }) {
  return (
    <div>
      <img src={`/images/${movie.poster}`} width="150" />
      <h4>{movie.title}</h4>
    </div>
  );
}

