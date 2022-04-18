import React from 'react'
import axios from './axios'
import requests from './requests';
import "./Banner.css"

function Banner() {
    
    const [movie, setMovie] = React.useState([]);

    React.useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            //get random movie from request.data.results
            const randomMovie = Math.floor(Math.random()*request.data.results.length)
            setMovie(request.data.results[randomMovie])
        }
        fetchData();
    }, [])

    console.log(movie)

    //To truncate the movie overview to certain length and keep it clean
    function truncate(str, max) {
        return str.length > max ? str.substr(0, max-1) + '… ' : str;
      }


    return (
      <header className='banner'
      style = {
          {
              backgroundSize : "cover",
              backgroundImage : `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
              backgroundPosition : "center center",
          }
        //   https://image.tmdb.org/t/p/original/35SS0nlBhu28cSe7TiO3ZiywZhl.jpg
      }
      >



        <div className='banner__contents'>
            {/* title */}
            <h1 className='banner__title'>
                {/* some movie gave title, some gave name and some gave original_name */}
                {movie?.title || movie?.name || movie?.original_name}
            </h1>

            <div className='banner__buttons'>
                {/* div > 2 buttons  */}
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>

            </div>


            <h1 className='banner__description'>
                {movie?.overview}
                {/* {truncate(movie?.overview, 150)} */}
                {/* didnot lad the page for me while running truncate function */}
            </h1>
            {/* description */}

        </div>

        <div className='banner--fadeBotton' />
        {/* added just to make nice fading effect at the bottom of the huge banner */}

      </header>
  )
}

export default Banner