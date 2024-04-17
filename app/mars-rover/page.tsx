import MainNav from "../ui/MainNav";
import PageTitle from "../ui/PageTitle";
import RoverForm from "../ui/RoverForm";

export default function MarsRover() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-12 relative">
      <MainNav active="Mars Rover" />

      <PageTitle title="Mars Rover Images" />

      <div className="text-center">
        <p>Welcome to the Mars rover photo hub!</p>
        <p>Fill out the form below to retrieve tailored Mars rover photos:</p>
      </div>

      <RoverForm />
    </main>
  );
}
