import Recipes from "./Recipes";
import { useEffect, useState } from "react";
import RecipeDetail from "./RecipeDetail";

export default function Body({ recipes, isRecipesQuerying }) {
  const [recipeId, setRecipeId] = useState("1");
  return (
    <div className="py-4">
      <div className="grid grid-cols-2 grid-flow-col gap-4">
        <div className="w-auto max-h-[950px] overflow-y-scroll space-y-3">
          <Recipes
            recipes={recipes}
            isRecipesQuerying={isRecipesQuerying}
            setRecipeId={setRecipeId}
          />

          <div className="flex space-x-1">
            <button className="rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              Prev
            </button>
            <button className="min-w-9 rounded-full bg-slate-800 py-2 px-3.5 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              1
            </button>
            <button className="min-w-9 rounded-full border border-slate-300 py-2 px-3.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              2
            </button>
            <button className="min-w-9 rounded-full border border-slate-300 py-2 px-3.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              3
            </button>
            <button className="min-w-9 rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              Next
            </button>
          </div>
        </div>
        <div>
          {recipeId ? <RecipeDetail recipeId={recipeId} /> : <div></div>}
        </div>
      </div>
    </div>
  );
}
