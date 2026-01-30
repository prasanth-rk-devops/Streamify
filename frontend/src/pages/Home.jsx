import MovieRow from "../components/MovieRow";

export default function Home() {
  return (
    <>
      <img src="/images/banner.jpg" width="100%" />
      <MovieRow title="Trending" category="trending" />
      <MovieRow title="Top Rated" category="top" />
      <MovieRow title="Action" category="action" />
    </>
  );
}
