import React, { FormEvent, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import * as api from '../services/api';

interface MoviesProviderProps {
  children: ReactNode;
};

interface IMoviesContext {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
};

export const MoviesContext = React.createContext<IMoviesContext>({} as IMoviesContext);



export function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

 

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}