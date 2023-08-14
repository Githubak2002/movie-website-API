import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Moviecard = (props) => {

  // const[dis,setdis] = useState("hidden");

  return (

    <main>

    <Link to={`/movie/${props.id}`}>


<div className='relative text-white overflow-hidden rounded-2xl flex flex-col items-center max-w-[210px] sm:mx-3 sm:my-4 mx-1 my-2'>

<div className='z-20' key = {props.id} >

<img src={props.imgsrc} alt="posterimg" className={`w-full h-full hover:scale-110 hover:opacity-20 transition-all ease-in `} />
</div>

<div className={`w-full h-full absolute overflow-hidden text-left`}>
<h1 className={`mt-[132px] text-xl bottom-10 font-bold pl-2 pr-1`}>{props.title}</h1>
<div className='pl-2 flexCenter'>
<i className=" pr-2 pt-1 ri-calendar-line"></i>
<h1 className={`w-full text-xl font-bold`}>{props.date}</h1>
</div>
<h2 className='p-2 text-sm'>{props ? props.overview.slice(0,90) : "" }...</h2></div>
</div>

    </Link>
    </main>
  )
}

export default Moviecard