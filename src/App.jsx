import './App.css';
import NavBar from './components/NavBar.jsx';
import ImageSection from './components/ImageSection.jsx';
import CardSection from './components/CardSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import EducationSection from './components/EducationSection.jsx';

function App() {
  return (
    <>
      <NavBar />
      <section className="w-full">
        <ImageSection />
      </section>
      <section className="w-full  p-8">
        <CardSection />
      </section>
      <section className="w-full ">
        <EducationSection />
      </section>
      <section className="w-full p-8 flex flex-col justify-center items-center gap-10 mt-5">
        <AboutSection />
      </section>
    </>
  );
}

export default App;
