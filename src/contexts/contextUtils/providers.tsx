import MoviesContextProvider from '../MovieContext';

const Providers = (props: { children: JSX.Element }) => {
  return <MoviesContextProvider>{props.children}</MoviesContextProvider>
}

export default Providers;
