import { useEffect, useState } from "react";

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
        <div className="grid min-h-screen w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <svg
            className="w-16 h-16 animate-spin text-gray-900/50"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900"
            ></path>
          </svg>
        </div>
      ) : (
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
          <div className="relative m-2.5 h-96 overflow-hidden text-white rounded-md">
            <img
              src={recipeDetail.image}
              alt="card-image"
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-xl font-semibold flex items-center justify-start gap-4">
              <div>{recipeDetail.name}</div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-400 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-2 text-sm font-bold">{recipeDetail.rating}</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
                <a
                  href="#"
                  className="text-sm font-medium underline hover:no-underline "
                >
                  {recipeDetail.reviewCount} reviews
                </a>
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
