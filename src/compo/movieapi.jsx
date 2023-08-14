// FOr imgs->  https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg

// initial img path -> https://image.tmdb.org/t/p/w500  [poster path]

// https://api.themoviedb.org/3/discover/movie?api_key=87778000a202b76c67f0b4c4bb21a70b

// search -> https://api.themoviedb.org/3/search/movie?query=Flash&api_key=87778000a202b76c67f0b4c4bb21a70b

// api POPULAR  -> https://api.themoviedb.org/3/movie/popular?api_key=87778000a202b76c67f0b4c4bb21a70b

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moviecard from './moviecard';

const Movieapp = () => {

    const imgbaseurl = "https://image.tmdb.org/t/p/w500";
    const apikey = '87778000a202b76c67f0b4c4bb21a70b';
    const baseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/movie/popular';  //top_rated
    // const movie = '/discover/movie';

    const [dis,setdis] = useState("");
    const [data, setmovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    },[])

    const fetchMovies = () => {
        const apiurl = `${baseUrl}${endpoint}?api_key=${apikey}`;

        axios.get(apiurl)
            .then((res) => {
                let resp = res.data;
                setmovies(resp.results);
                    console.log(resp.results)
                    console.log(resp.results[0].overview)
                // console.log(resp[0].id)
            }
            )
            .catch(err => console.log("error"));
    }

    const[searcheyWord,setsearcheyWord] = useState('');
    const searchmovie = () =>{
        const url = `${baseUrl}/search/movie?query=${searcheyWord}&api_key=${apikey}`;
        axios.get(url)
        .then(res => {
            let resp = res.data;
            setmovies(resp.results);
            console.log(res);
        })
        .catch(err=> console.log(err))
    }

    return (
        <section className='mt-6 max-w-[1280px] mx-auto'>
            <main>

                <div>
                    <h1 className='text-4xl font-bold text-center text-lime-400'>Movie using API </h1>
                </div>

                <div className='flexCenter mt-5 '>
                    <input type='text' placeholder='search movies' className='p-2 border border-b' value={searcheyWord} onChange={(e)=>setsearcheyWord(e.target.value)}></input>
                    <button className='p-2 border border-b'
                        onClick={searchmovie}
                    >Search</button>
                </div>
        
                <main className='flexCenter my-7'>
                <div className='grid gap-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 mx-auto px-4 mt-6'>
                    {
                        data.map((val) => {
                        return(
                            <Moviecard 
                            key = {val.id}
                            imgsrc = {`${imgbaseurl}${val.poster_path}`}
                            id = {val.id}
                            title = {val.title}
                            overview = {val.overview}/> 
                            
                            
                            /*  <div>
                            <div className='border-[2px] border-black relative flex flex-col items-center overflow-hidden rounded-xl max-w-[210px]' key = {val.id}>

                            <img src={`${imgbaseurl}${val.poster_path}`} alt="posterimg" className={`rounded-xl w-full h-full hover:scale-110 hover:opacity-30 transition-all ease-in `} onMouseOver={() => setdis("flex")} onMouseOut={() => setdis("hidden")}/>
                            <h1 className={` absolute text-x bottom-10 font-bold text-center mt-3 px-3 ${dis}`}>{val.title}</h1>
                            </div>
                            </div>  */
                        )
                       })
                    }
                </div></main>

            </main>
        </section>
    )
}

export default Movieapp