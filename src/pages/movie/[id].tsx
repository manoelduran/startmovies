import { GetStaticProps } from "next";
import { MoviesProvider } from "../../context/MoviesContext";
import * as api from '../../services/api';
import { Container } from './styles';

export default function Movie({ currentMovie }) {

  return (
    <Container>
      <h1>{currentMovie.title}</h1>
      <p>{currentMovie.overview}</p>
    </Container>
  );
}


export async function getStaticPaths(search) {
  const response = await fetch(`/search/movie?api_key=b93819156d04da85373fbb94a6d67acb&query=${search}`)
  const movies = await response.json()

  return {
    paths: movies.map((movie) => ({
      params: { id: movie.id }
    })),
    fallback: false
  }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b93819156d04da85373fbb94a6d67acb&language=en-US`)
  const currentMovie = await response.json()

  return { props: { currentMovie } }
}