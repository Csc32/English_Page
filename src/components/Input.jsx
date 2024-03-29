export default function Input({ inputName, type, id, placeholder }) {
  return (
    <div className="w-full flex flex-col gap-2 mb-5 lg:w-1/2">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-bold text-white flex-1"
      >
        {inputName}
      </label>
      <input
        type={type}
        id={id}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex-1 focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:shadow-sm-light"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
