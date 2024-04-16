import MainNav from "../ui/MainNav";
import PageTitle from "../ui/PageTitle";

export default function MarsRover() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-12 relative">
      <MainNav active="Mars Rover" />

      <PageTitle title="Mars Rover Images" />

      <div className="text-center">
        <p>Welcome to the Mars rover photo hub!</p>
        <p>Fill out the form below to retrieve tailored Mars rover photos:</p>
      </div>

      <form className="flex flex-col text-center border-2 border-white">
        <p>Rover Type</p>

        <div className="flex justify-normal">
          <label htmlFor="Opportunity" className="mb-2">
            Opportunity
          </label>
          <input
            type="radio"
            value="Opportunity"
            name="rover-name"
            className="mb-4"
          />

          <label htmlFor="Spirit" className="mb-2">
            Spirit
          </label>
          <input
            type="radio"
            value="Spirit"
            name="rover-name"
            className="mb-4"
          />

          <label htmlFor="Curiosity" className="mb-2">
            Curiosity
          </label>
          <input
            type="radio"
            value="Curiosity"
            name="rover-name"
            className="mb-4"
          />
        </div>
      </form>
    </main>
  );
}
