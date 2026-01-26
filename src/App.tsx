import "./App.css";
import EventForm from "./components/EventForm";

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
    </main>
  );
}

export default App;
