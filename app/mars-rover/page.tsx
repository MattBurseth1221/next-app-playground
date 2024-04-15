import MainNav from "../ui/MainNav";
import PageTitle from "../ui/PageTitle";

export default function MarsRover() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 relative">
      <MainNav active="Mars Rover" />

      <PageTitle title="Mars Rover Images" />
    </main>
  );
}
