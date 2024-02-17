export default function HamburgerButton({ hidden, updateVisibility }) {
  const handleClick = () => {
    updateVisibility();
  };
  return (
    <button
      data-collapse-toggle="navbar-sticky"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-indigo-500 dark:focus:ring-indigo-600"
      aria-controls="navbar-sticky"
      aria-expanded={hidden}
      onClick={handleClick}
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
}
