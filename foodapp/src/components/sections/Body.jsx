import Recipes from "./AdvanceFilter";
import AdvanceFilter from "./Recipes";

export default function Body() {
  return (
    <div className="py-4">
      <div className="grid grid-cols-12 grid-flow-col">
        <div className="col-span-2">
          <AdvanceFilter />
        </div>
        <div className="col-span-10">
          <Recipes />
        </div>
      </div>
    </div>
  );
}
