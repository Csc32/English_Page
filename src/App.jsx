import NavBar from './components/NavBar.jsx';
import './App.css';
import ImageSection from './components/ImageSection.jsx';

function App() {
  return (
    <>
      <NavBar />
      <section className="w-full">
        <ImageSection />
      </section>
    </>
  );
}

export default App;
