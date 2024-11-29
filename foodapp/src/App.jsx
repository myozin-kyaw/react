import { useState, useEffect } from "react";
import Body from "./components/sections/Body";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import NavBar from "./components/sections/NavBar";

function App() {
  const [isRecipesQuerying, setIsRecipesQuerying] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch(`https://dummyjson.com/recipes?limit=24`);
      const data = await res.json();
      setRecipes(data.recipes);
      setIsRecipesQuerying(false);
    };

    fetchRecipes().catch(console.error);
  }, [query]);

  // console.log(recipes);

  return (
    <div className="mx-12">
      <NavBar />
      <Header />
      <Body recipes={recipes} isRecipesQuerying={isRecipesQuerying} />
      <Footer />
    </div>
  );
}

export default App;
