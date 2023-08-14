import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

const Moviedetails = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return (
        <main className="movie">
            <div className="px-5 md:px-14 overflow-hidden  flexCenter">
                <img className="rounded-[30px] " src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>

<section className="max-w-[1168px] mx-auto flex">
                
    <div className=" md:flex hidden
    md:ml-14 overflow-hidden 
        max-w-[210px] py-6 
    ">
        <img className="rounded-2xl" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
    
    </div>
{/* --- all content --- */}



    <div className="mt-6 sm:ml-12 ml-6 text-sm ">
        <h1 className="font-black sm:text-2xl md:text-7xl lg:text-7xl moviefont text-2xl">{currentMovieDetail ? currentMovieDetail.original_title : ""}</h1>
        <div className="sm:text-lg md:text-xl text-sm pr-3">
        <h2 className=" font-semibold md:pt-12 pt-4">{currentMovieDetail ? currentMovieDetail.tagline : ""}</h2>
        <div className="flex py-1">
            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i className="ri-star-half-line px-2" />
            <span className="">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
        </div>  
        <div className="py-1">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
        <div className="">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
        <div className="py-1">
            {
                currentMovieDetail && currentMovieDetail.genres
                ? 
                currentMovieDetail.genres.map(genre => (
                    <><span className="" id={genre.id}>{genre.name}</span></>
                )) 
                : 
                ""
            }
        </div></div>


    </div>

</section>
    

    
    <div className="max-w-[1168px] md:ml-10 sm:ml-6 mt-6 px-6 ">
        <h2 className="text-2xl font-black pb-2">Synopsis</h2>
        <h2 className="text-sm sm:text-lg text-[#ffffffb1]">{currentMovieDetail ? currentMovieDetail.overview : ""}</h2>
    </div>

    
        </main>
    )
}

export default Moviedetails