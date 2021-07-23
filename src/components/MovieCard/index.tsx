import { Container, Banner, Title } from './styles';

interface MovieCardProps {
  title: string;
  backdrop_path: string;
}

export function MovieCard(props: MovieCardProps) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Banner src={props.backdrop_path} />
    </Container>
  );
}