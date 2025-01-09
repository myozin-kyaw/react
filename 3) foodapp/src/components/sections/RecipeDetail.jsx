import { useEffect, useState } from "react";
import Spinner from "../loadings/spinner";
import Rating from "../animations/Rating";
import Clock from "../svgs/Clock";
import Tags from "../utility/Tags";
import ContentList from "../utility/ContentList";
import FoodService from "../svgs/FoodService";

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
                <Clock
                  cookTimeMinutes={
                    recipeDetail.cookTimeMinutes + recipeDetail.prepTimeMinutes
                  }
                />
              </div>
            </div>
            <div className="space-y-2">
              <ContentList
                label={"Meal Type"}
                contents={recipeDetail.mealType}
              />
            </div>
            <div className="space-y-2">
              <ContentList
                label={"Ingredients"}
                contents={recipeDetail.ingredients}
              />
            </div>
            <div className="space-y-2">
              <ContentList
                label={"Instructions"}
                contents={recipeDetail.instructions}
              />
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
