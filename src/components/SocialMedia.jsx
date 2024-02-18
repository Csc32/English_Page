export default function SocialMedia({ title, alt, image, link }) {
  return (
    <article className="w-full flex flex-col justify-evenly items-center gap-1">
      <h3 className="text-sm font-medium">{title}</h3>
      <a
        href={link}
        className="hover:invert  transition-all ease duration-500"
        target="_blank"
      >
        <img src={image} alt={alt} />
      </a>
    </article>
  );
}
