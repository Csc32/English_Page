import { useState, useEffect } from 'react';
import Button from './Button.jsx';
import HamburgerButton from './HamburgerButton.jsx';
import Menu from './Menu.jsx';
import { BUTTON_STYLES } from '../constants.js';

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const updateVisibility = () => setHidden(!hidden);
  useEffect(() => {
    const subMenu = document.getElementById('navbar-sticky');
    if (subMenu) {
      subMenu.classList.toggle('hidden');
    }
  }, [hidden]);

  return (
    <nav className="bg-indigo-900 text-white dark:bg-indigo-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="self-center text-2xl font-semibold space-nowrap">
          MCO Learning
        </h1>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button
            name={BUTTON_STYLES[0].normal.name}
            style={BUTTON_STYLES[0].normal.style}
            type={BUTTON_STYLES[0].normal.type}
          />
          <HamburgerButton
            hidden={hidden}
            updateVisibility={updateVisibility}
          />
        </div>
        <Menu />
      </div>
    </nav>
  );
}
