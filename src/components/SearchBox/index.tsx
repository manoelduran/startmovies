import { FormEvent, useContext, useState } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { toast } from "react-toastify";
import * as api from '../../services/api';
import { Container, Section, Form, Input } from './styles';


export function SearchBox() {
  const [search, setSearch] = useState('')
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
    catch {
      toast.error('Filme não encontraddo');
    }
  }
  return (
    <Container>
      <Section>
        <Form onSubmit={handleSubmit}>
          <Input
            value={search}
            placeholder="Escolha seu filme"
            type="text"
            onChange={(event) => setSearch(event.target.value)}
          />
        </Form>
      </Section>
    </Container>
  );
}