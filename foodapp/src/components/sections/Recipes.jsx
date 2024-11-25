import Recipe from "./Recipe";

export default function Recipes({ recipes }) {
  return (
    <div className="grid grid-cols-12 gap-2">
      {recipes.map((recipe, index) => (
        <div key={recipe?.id ?? index} className="col-span-3">
          <Recipe recipe={recipe} />
        </div>
      ))}
    </div>
  );
}
