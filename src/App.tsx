import Header from "./components/Header";
import Menu from "./components/Menu";
import "./styles/App.css";

function App() {
  return (
    <>
      <Menu />
      <Header />
      <section className="w-screen px-6 overflow-x-hidden">
        <h2 className="text-white font-bold text-2xl inline-block relative">
          New & Trending
        </h2>
      </section>
    </>
  );
}

export default App;
