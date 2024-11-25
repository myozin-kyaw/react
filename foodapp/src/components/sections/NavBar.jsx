import SearchUI1 from "../forms/search/SearchUI1";
import TextTitle from "../text/TextTitle";

export default function NavBar() {
  return (
    <div className="py-4 border-b border-slate-200">
      <div className="flex justify-between items-center">
        <TextTitle />
        <SearchUI1 />
      </div>
    </div>
  );
}
