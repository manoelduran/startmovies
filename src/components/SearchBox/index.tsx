import React, { FormEvent, useContext, useState } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import * as api from '../../services/api';
import { Container, Input } from './styles';



export function SearchBox() {
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { setMovies } = useContext(MoviesContext);
  const fetchMovies = async () => {
    const movies = await api.searchMovies(search)
    console.log(movies)
    setMovies(movies);
  }
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      await fetchMovies();
    }
    catch (err) {
      console.log(err)
      alert('Filme não encontrado')
    }
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          value={search}
          placeholder="Escolha seu filme"
          type="text"
          onLoad={() => setIsLoading(true)}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </Container>
  );
}