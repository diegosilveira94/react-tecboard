import "./App.css";
import Banner from "./components/Banner";
import EventForm from "./components/EventForm";
import TitleTheme from "./components/TitleTheme";
import EventCard from "./components/EventCard";
import { themes } from "./data/themes";
import type { EventFormData } from "./components/EventForm/EventForm";
import type { Event } from "./data/events";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      src: "http://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      alt: "developer-woman",
      theme: themes[0].name,
      date: new Date(),
      title: "Mulheres no Front",
      description:
        "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
    },
  ]);

  const toAddEvent = (formData: EventFormData) => {
    const newEvent: Event = {
      id: crypto.randomUUID(),
      title: formData.eventName,
      theme: formData.eventTheme,
      date: formData.eventDate,
      src: formData.themeCover,
      alt: formData.eventName,
      description:
        "Valorizando e impulsionando a participação feminina no desenvolvimento front-end",
    };

    setEvents([...events, newEvent]);
  };

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner className="banner" alt="banner" src="./banner.png" />
      <EventForm submit={toAddEvent} themes={themes} />

      <section className="container">
        {themes.map((theme) => {
          const themeEvents = events.filter(
            (event) => event.theme === theme.name,
          );

          if (themeEvents.length === 0) {
            return null;
          }

          return (
            <section key={theme.id}>
              <TitleTheme theme={theme.name} />
              <div className="events">
                {themeEvents.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}

export default App;
