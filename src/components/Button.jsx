export default function Button({ name, style, type }) {
  return (
    <button type={type} className={style}>
      {name.toUpperCase()}
    </button>
  );
}
