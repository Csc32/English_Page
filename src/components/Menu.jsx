import Item from './Item.jsx';
import ITEMS from '../constants.js';

export default function Menu() {
  return (
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col text-indigo-300 p-4 md:p-0 mt-4 font-medium border border-indigo-500 rounded-lg bg-indigo-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-indigo-900 dark:bg-indigo-300 md:dark:indigo-500 dark:indigo-700">
        {ITEMS.map((el, i) => (
          <Item name={el.name} key={i} />
        ))}
      </ul>
    </div>
  );
}
