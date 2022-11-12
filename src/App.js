import './App.css';
import Navbar from './components/navbar';
import MovieContextProvider from './contexts/moviecontext';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
      </MovieContextProvider>
    </div>
  );
}

export default App;
