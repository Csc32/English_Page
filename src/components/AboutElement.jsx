export default function AboutElement({ title, description }) {
  return (
    <article className="w-full flex flex-col justify-center items-center text-gray-900 h-44 bg-transparent shadow-md gap-1">
      <h3 className="text-2xl flex-1 font-bold">{title}</h3>
      <p className="text-md text-gray-700 flex-1">{description}</p>
    </article>
  );
}
