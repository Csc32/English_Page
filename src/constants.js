import teachers from './images/teachers.avif';
import calendar from './images/calendar.avif';
import didactic from './images/recursos didacticos.avif';
import github from './images/github.png';
import instagram from './images/instagram.png';

export const ITEMS = [
  {
    name: 'Sevicios',
  },
  {
    name: 'Precios',
  },
  {
    name: 'Contactanos',
  },
];
export const TEXTS = [
  'Se parte de una comunidad que te ayuda a crecer económicamente.',
  'Conéctate con amigos y familiares de todo el mundo. No pierdas esta oportunidad',
  'Descubre nuevas formas de aprender inglés y mucho más. ¡No esperes más!',
];

export const CARDS_ELEMENTS = [
  {
    title: 'EXCELENTES PROFESORES',
    description:
      'Contamos con un grupo de personas capaces de enseñar y solventar todas tus dudas, para asi mejorar tus notas en ingles',
    image: teachers,
    imageInfo: 'Profesores',
  },
  {
    title: 'RECURSOS DE CALIDAD',
    description:
      'Preparamos a tus necesidades los recursos didacticos que te ayudaran a mejorar tus habilidades en el idioma ingles.',
    image: didactic,
    imageInfo: 'Recursos didacticos',
  },
  {
    title: 'HORARIOS FLEXIBLES',
    description:
      'Contamos con un horario para atenderte de la manera mas comoda para garantizar una educacion de calidad',
    image: calendar,
    imageInfo: 'Calendar',
  },
];
export const ABOUT_ELEMENTS = [
  {
    title: '¿Quienes somos?',
    description:
      'Somos futuros docentes, estudiantes de la Universidad Pedagogica Experimental Libertador, con amplios conocimientos en ingles y pedagia apasionados por nuestra labor.',
  },
  {
    title: '¿Que te podemos ofrecer? ',
    description:
      'Te ofrecemos asesorias virtuales, cursos de ingles, elaboracion de tareas en ingles, entre otros. Además de clases de calidad 😎.',
  },
  {
    title: '¿Como te puedes comunicar con nosotros ?',
    description:
      'Contactanos a través de nuestras redes sociales, puedes seguirnos por instagram, facebook o nuestro canal de telegram 😄. Por estos medios responderemos todas tus dudas ✌.',
  },
];

export const INPUT_CONTENTS = [
  {
    inputName: 'Nombre',
    type: 'text',
    id: 'name',
    placeholder: 'Jhoen',
  },
  {
    inputName: 'Apellido',
    type: 'text',
    id: 'lastname',
    placeholder: 'Doe',
  },
];

export const BUTTON_STYLES = [
  {
    normal: {
      style:
        'text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      name: 'registrarse',
      type: 'button',
    },
    submit: {
      style:
        'text-gray-800 bg-white py-3 px-2 hover:bg-gray-600 hover:text-white transition ease-linear duration-300 focus:ring-4 focus:outline-none focus:ring-gray-500 font-bold rounded-lg text-sm px-4 py-2 text-center',
      name: 'Enviar Mensaje',
      type: 'submit',
    },
  },
];
export const SOCIAL_MEDIA = [
  {
    title: 'Realizado por:',
    alt: 'Github',
    img: github,
    link: 'https://github.com/Csc32',
  },
  {
    title: 'Siguenos en:',
    alt: 'Instagram',
    img: instagram,
    link: '#',
  },
];
