import React, { useEffect, useState } from 'react'
import axios from '../axios';
import "./Row.css"

const base_url = 'https://image.tmdb.org/t/p/original/'
function Row({ title, fetchurl, isLargeRow }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchurl)
      setMovie(request.data.results);

      return request
    }

    fetchData();

  }, [fetchurl])

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className="row_posters">
        {movie.map(movies => (
          <img
            key={movies.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movies.poster_path:movies.backdrop_path}`}
            alt={movies.name} />
        ))}
      </div>
    </div>


  )
}

export default Row