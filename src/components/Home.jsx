import React, { useEffect, useState } from "react"
import Displaycards from "./Displaycards";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Link } from "react-router-dom";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=87778000a202b76c67f0b4c4bb21a70b&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
<>
  <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
    {
        popularMovies.map(movie => (

        // <Link style={{textDecoration:"none",color:"white"}} to={`/movies/${movie.id}`}>
    
            <div className="mx-auto relative lg:px-12">

            {/* --- carousel imgs div --- */}
            <div className=" box lg:rounded-3xl overflow-hidden">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} className='box opacity-80'/>
            </div>

            {/* --- carousel CONTENT div --- */}
            <div className="absolute bottom-12 z-50 sm:px-16 flex flex-col items-start justify-center text-left">
                <h1 className="moviefont sm:text-2xl lg:text-6xl text-md sm:pb-6 pl-2 lg:pb-8">{movie ? movie.original_title: ""}</h1>
                <h3 className="hidden md:flex text-xl lg:text-3xl font-bold pb:4 lg:pb-8"> 
                    {movie ? movie.release_date : ""}
                    <span className="hidden md:flex pl-6 lg:text-2xl font-bold">
                        {movie ? movie.vote_average :""} <i className="px-2 ri-star-half-line"></i><b>Rating</b>
                        {/* <i className="fas fa-star" />{" "} */}
                    </span>
                </h3>
                <div className="hidden md:flex posterImage__description">{movie ? movie.overview : ""}</div>
            </div>
            </div>

))
}
        {/* </Link> */}

                </Carousel>
                <Displaycards />
            </div>
        </>
    )
}

export default Home