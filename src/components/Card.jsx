export default function Card({ title, description, image, imageInfo }) {
  return (
    <article class="max-w-sm bg-gray-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img class="rounded-t-lg" src={image} alt={imageInfo} />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </article>
  );
}
