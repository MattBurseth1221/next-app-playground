"use client";

import { useRef, useState } from "react";
import MainNav from "../ui/MainNav";
import PageTitle from "../ui/PageTitle";

export default function MarsRover() {
  const [generatedPhoto, setGeneratedPhoto] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [photoCount, setPhotoCount] = useState(1);
  const activeTab = useRef("Mars Rover");

  async function logFetch() {
    setIsLoading(true);

    const response = await fetch("../api/openai-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userPrompt: inputValue,
      })
    })
      .then((res) => res.json());

    if (response.status === 405) {
      alert('Server error...');
      return;
    } else if (response.status === 401) {
      alert('Enter a longer prompt...');
      return;
    }

    setGeneratedPhoto(response.data[0].url);
    localStorage.setItem(`dall-e-3-photo-${photoCount}`, JSON.stringify({
      prompt: inputValue,
      photo_url: response.data[0].url,
    }));

    setPhotoCount(photoCount + 1);
    setIsLoading(false);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <MainNav active={activeTab.current} />

      <PageTitle title="Perserverance Hub" />
      
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} className="text-black"/>
      <button className="w-40 h-40 bg-blue-300 z-30" onClick={logFetch}>Generate</button>
      {isLoading ? <div>Loading photo...</div>
      : (<div>
          <img src={generatedPhoto} alt="Generated photo" className="w-[1024] h-[1024]" />
        </div>)}
    </main>
  );
}
