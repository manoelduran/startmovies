import { Header } from '../components/Header';
import { SearchBox } from '../components/SearchBox'
import Link from 'next/link';
import { MovieCard } from '../components/MovieCard';
import React, { useContext, useState } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import { Container, MapDiv } from '../styles/styles';
import { useEffect } from 'react';
import { Loading } from '../components/Loading';

export default function Home() {
  const { movies, search, setSearch, fetchMovies } = useContext(MoviesContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true)
    }
    if (search) {
      try {
        fetchMovies(search);
        setIsLoading(false)
      } catch (error) {
        setError('Filme não encontrado!');
      }
    }
  }, [search])
  return (
    <Container>
      <Header />
      <SearchBox value={search} onChange={(search) => setSearch(search)} />
      {isLoading ? (<Loading />) : (
        <MapDiv>{
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
        </MapDiv>
      )}


    </Container>
  )
}