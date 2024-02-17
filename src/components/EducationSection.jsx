import image from '../images/estudiantes.jpg';
export default function EducationSection() {
  return (
    <article className="w-full p-8 flex flex-row justify-evenly gap-1 flex-wrap-reverse">
      <img
        src={image}
        alt="profesora y estudiante"
        className="rounded-3xl w-48 flex-1 md:order-2"
      />
      <p className="text-2xl font-medium text-gray-900 text-left w-full flex-1">
        La <span className="text-sky-600">educación</span> es lo primero, por
        eso nos enfocamos en dar clases tanto de forma presencial como de forma
        online atendiendo a las necesidades de los estudiantes
      </p>
    </article>
  );
}
