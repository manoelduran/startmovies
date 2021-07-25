import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export async function searchMovies(search: string): Promise<Movie[]> {
  const result = await api.get(`/search/movie?api_key=b93819156d04da85373fbb94a6d67acb&query=${search}`)
  return result.data.results;
}

export async function getMovie(id: number): Promise<Movie> {
  const result = await api.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b93819156d04da85373fbb94a6d67acb&language=en-US`)
  return result.data;
}