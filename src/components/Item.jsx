export default function Item({ name }) {
  return (
    <li>
      <a
        href="#"
        className="block py-2 px-3 rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-gray-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition duration-50 ease-linear"
      >
        {name}
      </a>
    </li>
  );
}
