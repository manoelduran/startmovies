import React, { FormEvent, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import * as api from '../services/api';

interface MoviesProviderProps {
  children: ReactNode;
};

interface IMoviesContext {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  fetchMovies: (search: string) => Promise<void>;
  search: string;
  setSearch: (search: string) => void;
};

export const MoviesContext = React.createContext<IMoviesContext>({} as IMoviesContext);



export function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState('');


  const fetchMovies = async () => {
    const movies = await api.searchMovies(search)
    setMovies(movies);
  }
  return (
    <MoviesContext.Provider value={{ movies, setMovies, search, setSearch, fetchMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}