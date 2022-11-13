import './App.css';
import AddMovieForm from './components/addmovieform';
import MovieList from './components/movielist';
import Navbar from './components/navbar';
import MovieContextProvider from './contexts/moviecontext';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
        <MovieList />
        <AddMovieForm />
      </MovieContextProvider>
    </div>
  );
}

export default App;
