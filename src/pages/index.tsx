import { Header } from "../components/Header";
import { SearchBox } from '../components/SearchBox'
import Link from 'next/link';
import { MovieCard } from "../components/MovieCard";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { Container, MapDiv } from "../styles/styles";

export default function Home() {
  const { movies } = useContext(MoviesContext);
  return (
    <Container>
      <Header />
      <SearchBox />
      <MapDiv>
        {movies.map((movie) => (
          <Link key={movie.id} href={`/${movie.id}`}>
            <a>
              <MovieCard
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
              />
            </a>
          </Link>
        ))}
      </MapDiv>
    </Container>
  )
}