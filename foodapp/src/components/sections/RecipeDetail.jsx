import { useEffect, useState } from "react";
import Spinner from "../loadings/spinner";
import Rating from "../animations/Rating";
import Clock from "../svgs/Clock";
import Tags from "../utility/Tags";

export default function RecipeDetail({ recipeId }) {
  const [recipeDetail, setRecipeDetail] = useState();
  const [isRecipeDetailQuerying, setIsRecipeDetailQuerying] = useState(true);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      setIsRecipeDetailQuerying(true);
      const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
      const data = await res.json();
      setRecipeDetail(data);
      setIsRecipeDetailQuerying(false);
    };

    fetchRecipeDetail().catch(console.error);
  }, [recipeId]);

  console.log(recipeDetail);

  return (
    <div className="text-slate-800">
      {isRecipeDetailQuerying ? (
        <Spinner />
      ) : (
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
          <div className="relative m-2.5 h-96 overflow-hidden text-white rounded-md">
            <img
              src={recipeDetail.image}
              alt="card-image"
              className="object-cover"
            />
          </div>
          <div className="p-4 space-y-4">
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="flex flex-col justify-start gap-2">
                <h2 className="text-xl font-semibold">
                  {recipeDetail.name} ({recipeDetail.cuisine})
                </h2>
                <div className="flex items-center gap-2">
                  <Rating rating={recipeDetail.rating} animate={true} />
                  <div className="text-sm font-medium underline">
                    {recipeDetail.reviewCount} reviews
                  </div>
                </div>
              </div>
              <div>
                <Clock cookTimeMinutes={recipeDetail.cookTimeMinutes} />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-base">Ingredients</h3>
              <ul className="list-disc pl-4">
                {Array.from(
                  { length: recipeDetail.ingredients.length },
                  (_, index) => (
                    <li key={index} className="text-sm font-light">
                      {recipeDetail.ingredients[index]}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-base">Instructions</h3>
              <ul className="list-disc pl-4">
                {Array.from(
                  { length: recipeDetail.instructions.length },
                  (_, index) => (
                    <li key={index} className="text-sm font-light">
                      {recipeDetail.instructions[index]}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="space-y-2">
              <Tags tags={recipeDetail.tags} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
