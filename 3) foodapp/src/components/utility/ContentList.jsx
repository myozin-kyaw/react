export default function ContentList({ label, contents }) {
  return (
    <div>
      <h3 className="font-semibold text-base">{label}</h3>
      <ul className="list-disc pl-4">
        {Array.from({ length: contents.length }, (_, index) => (
          <li key={index} className="text-sm font-light">
            {contents[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}
