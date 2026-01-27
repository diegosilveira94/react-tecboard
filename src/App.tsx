import "./App.css";
import EventForm from "./components/EventForm";
import TitleTheme from "./components/TitleTheme";
import { themes } from "./data/themes";

// no react componentes são FUNÇÕES

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <EventForm />
      <section>
        <TitleTheme className="title-theme" themes={themes}></TitleTheme>
      </section>
    </main>
  );
}

export default App;
