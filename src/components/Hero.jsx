// Hero.js

import Herod from '../assets/images/ceo.jpeg';
export default function Hero() {
    return (
      <div className='w-full bg-gray-100'>
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh] ">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h3 className="text-center text-xl font-bold">

            </h3><br></br>
            <h2 className="text-center text-indigo-900 text-3xl font-bold">
              WELCOME TO MY PORTFOLIO
            </h2>
          </div>
          <p className="text-center">
            I am a passionate self-taught developer with a deep understanding of creating web products.
            I have about 13 years of experiece in web development, specializing in front-end technologies.
            My journey has been filled with learning and growth, and I am excited to share my work with you.
            Feel free to explore my product and projects, and don't hesitate to reacout to me for any inquiries or collaborations.

         </p>
        </div>
        <div className="flex-1">
          <img src= {Herod}
               alt=""
               className="w-[350px] h-[300px] object-cover rounded-full float-right"/>
        </div>
      </section></div>
    );
  }