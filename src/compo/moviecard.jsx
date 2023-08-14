import React from 'react'

const Moviecard = (props) => {
    // const [key,imgsrc,title] = props;
  return (
    <div className='flex flex-col items-center max-w-[210px] border-[2px] border-black'>

    <div 
    // className='border-[2px] border-black flex items-center overflow-hidden w-[150px] h-[225px] sm:max-w-[210px] sm:h-auto sm:w-[210px]' key = {props.id}
    className='flex items-center overflow-hidden' key = {props.id}
    
    >
    <img src={props.imgsrc} alt="posterimg" className={`w-full h-full hover:scale-110 hover:opacity-60 transition-all ease-in`} 
    // onMouseOver={() => setdis("flex")} onMouseOut={() => setdis("hidden")}
    />
    </div>

    <div className='max-h-[210px] overflow-hidden'>
    <h1 className={`text-2xl bottom-10 font-bold text-center mt-3 px-1`}>{props.title}</h1>

    <h2 className='p-2 font-semibold text-left'>{ props.overview.slice(0,110) }...</h2></div>
    </div>
  )
}

export default Moviecard