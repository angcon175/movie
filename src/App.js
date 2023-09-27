import './App.css';
import Header from './Components/Header';
import Movie from './Components/Movie';
import movies from "./movie.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
      {
      movies.map((Element, index) => {
        return (
        <Movie 
        key = {index}
        title = {Element.Title}
        year= {Element.Year}
        img= {Element.Poster}
        />
        )
      })
      }
      </div>
    </div>
  );
}

export default App;
