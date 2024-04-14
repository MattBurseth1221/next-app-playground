"use client";

import { useRef } from "react";
import MainNav from "../ui/MainNav";
import PageTitle from "../ui/PageTitle";

export default function MarsRover() {
  const activeTab = useRef("Mars Rover");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <MainNav active={activeTab.current} />

      <PageTitle title="Perserverance Hub" />
    </main>
  );
}
