import React from 'react'
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
//not importing axios not from dependencies but from axios.js we created
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl, isLargeRow}) {
    
    const [movies, setMovies] = React.useState([]);

    const [trailerUrl, setTrailerUrl] = React.useState("");
    
    React.useEffect(() => {
      async function fetchData(){
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results)
        return request;
      }
      fetchData();
      //we have to do this while using async inside the useEffect
    }, [fetchUrl])
    // console.log(movies)
    //[] is the dependency arrays in the useEffect, leaving it empty runs it only once after the page loading
    //here [fetchUrl] is used as the useeffect depends on the fetchUrl and needs to render for changing fetchUrl

    //for opts in youtube, use these code from youtube react npm google search
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const handleClick = (movie) => {
      // console.log(movie)
      if(trailerUrl){
        setTrailerUrl('');
      }
      else{
        //movieTrailer funcition is used to fetch the url for the youtube trailer
        movieTrailer(movie?.name || "")
          .then((url) => {
            // https://www.youtube.com/watch?v=-cMqr9HpZ-Y
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'))


          })
          .catch((error) => console.log(error))
      }
    }

    return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
   
          {/* several row__posters */}
          {movies.map (movie => (
            <img 
              key= {movie.id}
              onClick = {() => handleClick(movie)}
              // className="row__poster"
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name} />
          ))}

        </div>

        {/* install two packages using npm i react-youtube and npm i movie-trailer */}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  )
}

export default Row