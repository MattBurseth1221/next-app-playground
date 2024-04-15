"use client";

import { useEffect, useRef, useState } from "react";
import MainNav from "../ui/MainNav";
import PageTitle from "../ui/PageTitle";

type PhotoItem = {
  prompt: string;
  photoURL: string;
};

export default function MarsRover() {
  const [generatedPhoto, setGeneratedPhoto] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [photoCount, setPhotoCount] = useState(1);
  const [generatedPhotos, setGeneratedPhotos] = useState<Array<PhotoItem>>([]);

  const activeTab = useRef("AI Images");

  useEffect(() => {
    setGeneratedPhotos(getPreviousPhotos());
  }, []);

  function getPreviousPhotos(): Array<PhotoItem> {
    let count = 1;
    let photoList = [];

    while (localStorage.getItem(`dall-e-3-photo-${count}`)) {
      let photoJson = JSON.parse(
        localStorage.getItem(`dall-e-3-photo-${count}`)!
      );

      photoList.push({
        prompt: photoJson.prompt,
        photoURL: photoJson.photo_url,
      });

      count++;
    }

    console.log(photoList);
    setPhotoCount(count);
    return photoList.reverse();
  }

  async function logFetch() {
    setIsLoading(true);

    const response = await fetch("../api/openai-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userPrompt: inputValue,
      }),
    }).then((res) => res.json());

    if (response.status === 405) {
      alert("Server error...");
      return;
    } else if (response.status === 401) {
      alert("Enter a longer prompt...");
      return;
    }

    setGeneratedPhoto(response.data[0].url);
    localStorage.setItem(
      `dall-e-3-photo-${photoCount}`,
      JSON.stringify({
        prompt: inputValue,
        photo_url: response.data[0].url,
        revised_prompt: response.data[0].revised_prompt,
      })
    );

    setInputValue("");
    setGeneratedPhotos([...generatedPhotos, {prompt: inputValue, photoURL: response.data[0].url}]);
    setPhotoCount(photoCount + 1);
    setIsLoading(false);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <MainNav active={activeTab.current} />

      <PageTitle title="DALL-E Image Generation" />

      <div className="flex flex-col items-center gap-4 w-[50%]">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="text-black w-[100%] rounded-md h-10 p-2"
        ></textarea>
        <button
          className="py-2 px-4 rounded-xl z-30 transition hover:bg-slate-500 duration-300"
          onClick={logFetch}
        >
          Generate
        </button>
      </div>

      {isLoading ? (
        <div>Loading photo...</div>
      ) : generatedPhotos.length === 0 ? (
        <div>No photos found.</div>
      ) : (
        <div className="flex flex-col items-center">
          {generatedPhotos.map((photo, index) => {
            return (
            <div key={index} className="flex flex-col items-center m-12 border-white border-2 w-[50%] text-center">
            <img
              src={photo.photoURL}
              alt="Generated photo"
              className="object-contain border-b-2 border-white"
            />
            <h1 className="p-6">{photo.prompt}"</h1>
          </div>)
          })}
        </div>
      )}
    </main>
  );
}
