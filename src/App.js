import './App.css';
import AddMovieForm from './components/addmovieform';
import Instructions from './components/instructions';
import MovieList from './components/movielist';
import Navbar from './components/navbar';
import Search from './components/searchbar';
import MovieContextProvider from './contexts/moviecontext';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
        <Search />
        <MovieList />
        <AddMovieForm />
        <Instructions />
      </MovieContextProvider>
    </div>
  );
}

export default App;
