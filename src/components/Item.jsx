export default function Item({ name, index }) {
  const ariaCurrent = index === 0 ? 'page' : '';

  console.log(name, index);
  return (
    <li>
      <a
        href="#"
        className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-100 md:p-0 md:dark:hover:text-gray-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        aria-current={ariaCurrent}
      >
        {name}
      </a>
    </li>
  );
}
