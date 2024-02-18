export default function Card({ title, description, image, imageInfo }) {
  return (
    <article className="flex flex-col justify-center items-center bg-transparent border border-gray-200 rounded-lg shadow-md w-full">
      <img className="rounded-t-lg lg:h-40" src={image} alt={imageInfo} />
      <div className="p-5 md:p-2 lg:h-60 flex flex-col justify-center items-center">
        <h5 className="mb-2 md:mb-1 text-2xl flex-1 font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-2 md:mb-1 font-normal flex-1 text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </article>
  );
}
