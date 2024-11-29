import Recipe from "./Recipe";

export default function Recipes({ recipes, isRecipesQuerying, setRecipeId }) {
  return (
    <div className="grid grid-cols-12 gap-2">
      {isRecipesQuerying
        ? Array.from({ length: 16 }, (_, index) => (
            <div
              key={index}
              className="col-span-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow text-gray-500 text-sm w-full h-[300px] animate-pulse"
            >
              <div className="rounded-t-lg h-56 w-full bg-gray-200"></div>
              <div className="px-2 py-3">
                <p className="h-3 w-full bg-gray-300 mb-2"></p>
                <p className="h-3 w-20 bg-gray-300 mb-2"></p>
              </div>
            </div>
          ))
        : recipes.map((recipe) => (
            <div key={recipe.id} className="col-span-6">
              <Recipe recipe={recipe} setRecipeId={setRecipeId} />
            </div>
          ))}
    </div>
  );
}
