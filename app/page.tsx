import { Main } from "next/document";
import MainNav from "./ui/MainNav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainNav />
    </main>
  );
}
