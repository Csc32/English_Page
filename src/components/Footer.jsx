import { SOCIAL_MEDIA } from '../constants.js';
import SocialMedia from './SocialMedia.jsx';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white flex flex-col py-2">
      <div className="w-full flex flex-row justify-evenly items-center">
        {SOCIAL_MEDIA.map((el) => (
          <SocialMedia
            title={el.title}
            alt={el.alt}
            image={el.img}
            link={el.link}
            key={el.alt}
          />
        ))}
      </div>
      <div className="w-full">
        <p className="text-sm font-medium">Hecho con ❤️ </p>
      </div>
    </footer>
  );
}
