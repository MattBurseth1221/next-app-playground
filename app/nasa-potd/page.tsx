"use client";

import PageTitle from "../ui/PageTitle";
import MainNav from "../ui/MainNav";
import { useEffect, useRef, useState } from "react";
import YoutubeEmbed from "../ui/YoutubeEmbed";

export default function NasaPotd() {
  const [photoInfo, setPhotoInfo] = useState<any | null>({});
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    if (sessionStorage.getItem('potd-data')) {
      let photoData = JSON.parse(sessionStorage.getItem('potd-data')!);
      setPhotoInfo(photoData);

      return;
    }

    async function getPhoto() {
      setIsLoading(true);

      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
      )
        .then((res) => res.json())
        .catch((e) => console.log(e));

      sessionStorage.setItem('potd-data', JSON.stringify(response));

      setPhotoInfo(response);
      setIsLoading(false);
    }

    getPhoto();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 relative">
      <MainNav active="NASA POTD"/>

      {/* <img src={meteor1.src} className=" absolute top-[3%] right-24 rotate-12 w-225 h-225" alt="Meteor Image"/>
      <img src={meteor2.src} className="min-w-75 min-h-75 absolute top-[9%] left-48 rotate-90 object-fill" alt="Meteor Image"/> */}
      

      <div className="flex flex-col items-center data-display">
        <PageTitle title="NASA's Photo of the Day" />

        {isLoading ? <code>Loading data...</code>
         : <div className="flex flex-col items-center p-5 text-center">
            {photoInfo.media_type === "video" ? <YoutubeEmbed embedId={photoInfo.url} />
            : <img src={photoInfo.hdurl} alt="Nasa Photo" className="w-[50vw] border-2 mb-5"/>}
            <h1 className="my-5">{photoInfo.title} - {photoInfo.date}</h1>
            <p className="w-1/2">{photoInfo.explanation}</p>
          </div>}
      </div>
    </main>
  );
}
