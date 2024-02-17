import { ABOUT_ELEMENTS } from '../constants.js';
import AboutElement from './AboutElement.jsx';

export default function AboutSection() {
  return (
    <>
      {ABOUT_ELEMENTS.map((el, index) => (
        <AboutElement
          title={el.title}
          description={el.description}
          key={index}
        />
      ))}
    </>
  );
}
