import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Row from './Components/Row'
import requests from './requests'

function App() {
  return (
    <div className="app">

      <Nav />
      <Banner />
      <Row title="Netflix Originals"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
