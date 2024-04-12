"use client";

import MeteorInfo from "../ui/MeteorInfo";
import MainNav from "../ui/MainNav";
import { useEffect, useRef, useState } from "react";

import meteor1 from '../images/asteroid-1-no-bg.png';
import meteor2 from '../images/asteroid-2-no-bg.png';

export default function NasaPotd() {
  const [photoInfo, setPhotoInfo] = useState<any | null>({});
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const activeTab = useRef("NASA POTD")

  useEffect(() => {
    async function getPhoto() {
      setIsLoading(true);

      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
      )
        .then((res) => res.json())
        .catch((e) => console.log(e));

      setPhotoInfo(response);
      setIsLoading(false);
    }

    getPhoto();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <MainNav active={activeTab.current}/>

      {/* <img src={meteor1.src} className=" absolute top-[3%] right-24 rotate-12 w-225 h-225" alt="Meteor Image"/>
      <img src={meteor2.src} className="min-w-75 min-h-75 absolute top-[9%] left-48 rotate-90 object-fill" alt="Meteor Image"/> */}
      

      <div className="flex flex-col items-center data-display">
        <h2 className="text-xl mb-10 border-spacing-5 border-2 p-5">NASA's Photo of the Day</h2>

        {isLoading ? <code>Loading data...</code>
         : <div className="flex flex-col items-center p-5 text-center">
            <img src={photoInfo.hdurl} alt="Nasa Photo" className="w-[50vw] border-2 mb-5"/>
            <h1 className="mb-5">'{photoInfo.title}' - {photoInfo.date}</h1>
            <p className="w-1/2">{photoInfo.explanation}</p>
          </div>}
      </div>
    </main>
  );
}
