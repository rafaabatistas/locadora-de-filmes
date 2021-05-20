import {createContext, useState } from 'react';

export const MovieContext = createContext<any | null>(null);

const MovieContextProvider = (props: { children: JSX.Element }) => {
  const [moviesList, setMoviesList] = useState([]);
  return <MovieContext.Provider value={{ moviesList, setMoviesList }}>{props.children}</MovieContext.Provider>
};

export default MovieContextProvider;
