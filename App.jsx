import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
const App = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-primary-blue-900 from-10% to-orange-900 to-90% m-full top-0 flex flex-wrap ">
       <div className=" h-[50px]flex flex-row justify-center items-center py-30">
        <nav className=" flex flex-row flex-wrap fixed top-0 right-0 left-0 h-15 py-4 width-100% bg-gradient-to-r from-primary-blue-900 from-10% to-orange-900 to-90% shadow-md text-lg z-9999">
          <ul className="flex space-x-14 text-blue-800 md-text-blue-500 ">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Shelves</a></li>
          <li><a href="#">Contacts</a></li>
           <div className="text-biege/50 ml-[500px]"><h3>Taurus@ThulaniLib</h3></div>
          </ul>         
        </nav>
       </div>
       <div className="flex flex-row py-5 px-7 relative bottom-10">
            <div >
              <img src="src\assets\image1.jpg" className="w-120 h-85 rounded-lg shadow-xl" alt="huge public library" />
            </div>
      
           <div className="text-[25px] text-biege pl-20">
               <h1>Taurus Library, Comfort, <span className="text-biege/75">Style and</span> <span className="text-biege/50"> vibrance intertwined</span></h1>

                <p className="text-[20px]">come, get yourself a book of your choice. All Genres are Available... <br />You can also borrow and take a book home with YOU! How Incredible!</p><br />
             <div className="px-5 flex space-x-15 flex-wrap">
                <button className="bg-gradient-to-l from-primary-blue-900 from-5% to-orange-950 to-95% px-3 p-3 shadow-2xl rounded-lg text-[20px]"><a href="">Borrow books</a></button>
                <button className="bg-gradient-to-l from-primary-blue-900 from-5% to-orange-950 to-95% px-3 p-3 shadow-2xl rounded-lg text-[20px]"><a href="">Sign-up for membership</a></button><br />
             </div><br />
             <h5>follow us on: </h5>
             <div className=" flex space-x-10 flex-row">              
              <a href="#"><FaLinkedinIn className="bg-blue-800 text-white rounded-md"/></a>
              <a href="#"><CiInstagram className="bg-gradient-to-l from-blue-500 via-pink-400 to-purple-500 rounded-md" /></a>
              <a href="#"><FaFacebookF className="bg-white text-blue-900 rounded-md" /></a>
             </div>
           </div>
        </div>
         <div>
            <footer className="text-blue-900"><h3>Taurus@ThulaniLib</h3></footer> 
         </div>
    </div>
    
    </>
  )
};

export default App;
 