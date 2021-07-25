import { Container, Banner, Title } from './styles';

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
}

export function MovieCard(props: MovieCardProps) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Banner src={`https://image.tmdb.org/t/p/w220_and_h330_face${props.poster_path}`} />
    </Container>
  );
}