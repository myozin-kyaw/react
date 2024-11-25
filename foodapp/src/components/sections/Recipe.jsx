export default function Recipe({ recipe }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow text-gray-500 text-sm w-full h-[300px]">
      <a href="#">
        <img
          className="rounded-t-lg h-56 w-full object-cover"
          src={recipe?.image}
          alt=""
        />
      </a>
      <div className="px-2 py-3">
        <p className="font-normal">{recipe?.title}</p>
      </div>
    </div>
  );
}
