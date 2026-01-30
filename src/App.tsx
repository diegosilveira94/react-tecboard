import "./App.css";
import Banner from "./components/Banner";
import EventForm from "./components/EventForm";
import TitleTheme from "./components/TitleTheme";
import EventCard from "./components/EventCard";
import { themes } from "./data/themes";
import { events } from "./data/events";

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner className="banner" alt="banner" src="./banner.png"></Banner>
      <EventForm />
      {themes.map((theme) => {
        return (
          <section key={theme.id}>
            <TitleTheme theme={theme.name} />
            <EventCard event={events[0]} />
          </section>
        );
      })}
    </main>
  );
}

export default App;
