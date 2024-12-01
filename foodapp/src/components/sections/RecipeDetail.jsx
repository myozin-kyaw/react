import { useEffect, useState } from "react";
import Spinner from "../loadings/spinner";
import Rating from "../animations/Rating";

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
          <div className="p-4 space-y-2">
            <h6 className="text-xl font-semibold flex flex-col justify-start gap-2">
              <div>{recipeDetail.name}</div>
              <div className="flex items-center gap-2">
                <Rating rating={recipeDetail.rating} animate={true} />
                <div className="text-sm font-medium underline text-gray-700">
                  {recipeDetail.reviewCount} reviews
                </div>
              </div>
            </h6>
            <p className="text-slate-600 leading-normal font-light">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
