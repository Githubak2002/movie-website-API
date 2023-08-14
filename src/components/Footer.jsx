import React from 'react'

function GetDate() {
    let d = new Date ();
    let year = d.getFullYear();
    return (
      <main className='flex items-center'> 
            <h2>Copyright <i className='mx-1 ri-copyright-line'></i>{year}. Created by <b className='font-bold text-xl'>Anurag Lohar</b>. </h2>
      </main>
    );
  }


const Footer = () => {
  return (
    <div className=' flexCenter md:px-0 px-[20px] text-[15px] py-[18px] flex-col'>

        <hr className='my-2 w-[85%] m-auto'/>

        <GetDate />

        <h6 className='pt-[4px] safade'>Frontend Movies website using REACT JS & Tailwind Css.</h6>

        <h6 className='pt-[4px] safade'> // API - Hooks - Router - Fundamentals... //</h6>
        
        <div className=' text-3xl hover:transition-all hover:scale-110 flexCenter pt-1'>
        <a href="https://github.com/Githubak2002" target='blank'>
        <i className=" ri-github-line p-2"></i></a>
        <a href="https://github.com/Githubak2002" target='blank'>
        <h2>Github</h2></a>
        </div>
        

    </div>
  )
}
export default Footer;
