import background from '../images/education.avif';
import { TEXTS } from '../constants.js';
import { TypeAnimation } from 'react-type-animation';
export default function ImageSection() {
  return (
    <div
      className="w-full flex flex-col justify-center items-center bg-cover h-80 md:h-80 lg:h-96 gap-5 py-5 pt-32 md:pt-5 text-white relative"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h2 className="w-full text-3xl font-bold mt-5 z-10">
        You can Learn English
      </h2>
      <h3 className="z-10 flex w-full">
        <TypeAnimation
          sequence={[TEXTS[0], 2000, TEXTS[1], 2000, TEXTS[2], 2000]}
          wrapper="span"
          speed={70}
          style={{
            fontSize: '1em',
            fontWeight: 'bold',
            flex: '1 1 auto',
          }}
          repeat={Infinity}
        />
      </h3>
      <a
        href="#"
        className="relative z-10 text-indigo-300 font-bold text-sm  transition ease-linear duration-300 hover:text-white"
      >
        Unete a Nosotros
      </a>
    </div>
  );
}
