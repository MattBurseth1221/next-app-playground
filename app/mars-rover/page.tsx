"use client";

import { useRef } from "react";
import MainNav from "../ui/MainNav";
import PageTitle from "../ui/PageTitle";

export default function MarsRover() {
  const activeTab = useRef("Mars Rover");

  async function logFetch() {
    const response = await fetch("../api/openai-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json());

    console.log(response);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <MainNav active={activeTab.current} />

      <button className="w-40 h-40 absolute bg-blue-300 z-30" onClick={logFetch}>Generate</button>

      <PageTitle title="Perserverance Hub" />
    </main>
  );
}
