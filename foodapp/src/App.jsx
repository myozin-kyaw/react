import { useState, useEffect } from "react";
import Body from "./components/sections/Body";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import NavBar from "./components/sections/NavBar";

function App() {
  const apiKey = "b92a8d99f55846399275ec2c6a7b4926";
  const [isRecipesQuerying, setIsRecipesQuerying] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=24`
      );
      const data = await res.json();
      setRecipes(data.results);
      setIsRecipesQuerying(false);
    };

    fetchRecipes().catch(console.error);
  }, [query]);

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
