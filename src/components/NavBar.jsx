import Item from './Item.jsx';

export default function NavBar() {
  const NavBarItems = [
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
  return (
    <nav className="bg-indigo-900 text-white dark:bg-indigo-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="self-center text-2xl font-semibold space-nowrap">
          MCO Learning
        </h1>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-indigo-500 dark:focus:ring-indigo-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col text-indigo-300 p-4 md:p-0 mt-4 font-medium border border-indigo-100 rounded-lg bg-indigo-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-indigo-900 dark:bg-indigo-300 md:dark:indigo-500 dark:indigo-700">
            {NavBarItems.map((el, index) => (
              <Item name={el.name} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
