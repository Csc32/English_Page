import teachers from './images/teachers.png';
import calendar from './images/calendar.png';
import didactic from './images/recursos didacticos.png';

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
