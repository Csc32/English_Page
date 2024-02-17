import { CARDS_ELEMENTS } from '../constants.js';
import Card from './Card.jsx';

export default function CardSection() {
  return (
    <>
      {CARDS_ELEMENTS.map((el) => (
        <Card
          title={el.title}
          description={el.description}
          image={el.image}
          imageInfo={el.imageInfo}
        />
      ))}
    </>
  );
}
