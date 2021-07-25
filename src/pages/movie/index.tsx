import { GetStaticProps } from "next";
import { MoviesProvider } from "../../context/MoviesContext";
import * as api from '../../services/api';
import { Container, Title, Text } from './styles';

export default function Movie() {

  return (
    <Container>
      <Title>ola</Title>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eius sit sequi aut harum voluptatibus praesentium? Ut consequatur, debitis ratione porro rerum fugit sunt fugiat assumenda omnis dolores nulla reprehenderit?</Text>
    </Container>
  );
}

/*
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params
  const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b93819156d04da85373fbb94a6d67acb&language=en-US`)
  const currentMovie = await response.json()

  return { props: { currentMovie } }
}*/