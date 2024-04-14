import { Main } from "next/document";
import MainNav from "./ui/MainNav";
import PageTitle from "./ui/PageTitle";
import orionEarthImage from "./images/orion-and-earth.webp";

export default function Home() {
  return (
    <>
      <img src={orionEarthImage.src} alt="Orion and Earth Image" className="absolute"/>
      <main className="flex min-h-screen flex-col items-center p-0">
        <MainNav active={""} />

        <PageTitle title="SpaceXploration"/>
      </main>
    </>
  );
}
