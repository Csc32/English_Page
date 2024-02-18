import { INPUT_CONTENTS, BUTTON_STYLES } from '../constants.js';
import Input from './Input.jsx';
import Button from './Button.jsx';

export default function Form() {
  return (
    <form className="w-full text-left text-sm z-10">
      {INPUT_CONTENTS.map((el) => (
        <Input
          inputName={el.inputName}
          type={el.type}
          id={el.id}
          placeholder={el.placeholder}
          key={el.id}
        />
      ))}
      <div className="w-full flex flex-col mb-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-bold text-white flex-1"
        >
          Escriba su mensaje
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-400 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Tu mensaje"
        ></textarea>
      </div>
      <div className="flex justify-center items-center mb-5">
        <Button
          name={BUTTON_STYLES[0].submit.name}
          style={BUTTON_STYLES[0].submit.style}
          type={BUTTON_STYLES[0].submit.type}
        />
      </div>
    </form>
  );
}
