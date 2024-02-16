import { useState } from 'react';
import Button from './Button.jsx';
import HamburgerButton from './HamburgerButton.jsx';
import Item from './Item.jsx';
import { useEffect } from 'react';

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
  const [hidden, setHidden] = useState(false);
  const updateVisibility = () => setHidden(!hidden);
  useEffect(() => {
    const subMenu = document.getElementById('navbar-sticky');
    subMenu.classList.toggle('hidden');
  }, [hidden]);

  return (
    <nav className="bg-indigo-900 text-white dark:bg-indigo-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="self-center text-2xl font-semibold space-nowrap">
          MCO Learning
        </h1>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button name="Registrarse" />
          <HamburgerButton
            hidden={hidden}
            updateVisibility={updateVisibility}
          />
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col text-indigo-300 p-4 md:p-0 mt-4 font-medium border border-indigo-100 rounded-lg bg-indigo-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-indigo-900 dark:bg-indigo-300 md:dark:indigo-500 dark:indigo-700">
            {NavBarItems.map((el) => (
              <Item name={el.name} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
