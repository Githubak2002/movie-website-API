import React, {useEffect, useState} from "react"
// import "./movieList.css"
import { useParams } from "react-router-dom"
import Moviecard from "./moviecard"

const Displaycards = () => {

    const imgbaseurl = "https://image.tmdb.org/t/p/w500";
    const api_key = "87778000a202b76c67f0b4c4bb21a70b";

    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        // https://api.themoviedb.org/3/movie/popular?api_key=87778000a202b76c67f0b4c4bb21a70b&language=en-US

        {type ? type : "popular"
        console.log(type)
        }
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=87778000a202b76c67f0b4c4bb21a70b&language=en-US`)
        .then(res => res.json())
        .then((data) =>  {
            return(
                setMovieList(data.results),
                console.log(data.results)
            )
        })
        
    }

    return (
        <div className=" max-l-[1280px] mx-auto">
            <h2 className="text-xl md:text-4xl font-bold text-center moviefont p-8">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="flexCenter flex-wrap">
                {
                    movieList.map((val) => {
                        return(
                            <Moviecard 
                            key = {val.id}
                            id = {val.id}
                            imgsrc = {`${imgbaseurl}${val.poster_path}`}
                            title = {val.title}
                            overview = {val.overview}
                            date = {val.release_date}/> 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Displaycards