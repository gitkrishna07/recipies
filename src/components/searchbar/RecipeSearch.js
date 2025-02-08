import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./recipesearch.css";

const RecipeSearch = () => {
  const URL_BY_NAME = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const URL_BY_LETTER = "https://www.themealdb.com/api/json/v1/1/search.php?f=";

  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);
  const handleSearch = async (term) => {
    setSearchTerm(term);

    if (term.length === 0) {
      setRecipes([]);
      return;
    }

    try {
      const isSingleLetter = term.length === 1;
      const res = await fetch(isSingleLetter ? `${URL_BY_LETTER}${term}` : `${URL_BY_NAME}${term}`);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const toggleFavorite = (recipe) => {
    let updatedFavorites;

    if (favorites.some((fav) => fav.idMeal === recipe.idMeal)) {
      updatedFavorites = favorites.filter((fav) => fav.idMeal !== recipe.idMeal);
    } else {
      updatedFavorites = [...favorites, recipe];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="titles">
          <h2>Search recipe of your favorite dish</h2>
        </div>

        <input
          type="text"
          placeholder="Search by name or first letter..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="searchInput"
        />

        <div className="recipes">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div key={recipe.idMeal} className="recipe">
                <Link to={`/recipe/${recipe.idMeal}`} className="imgContainer">
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                </Link>
                <h3>{recipe.strMeal}</h3>
                <button onClick={() => toggleFavorite(recipe)} className="addFavorite">
                  {favorites.some((fav) => fav.idMeal === recipe.idMeal) ? "Remove ❤️" : "Add to Favorites ❤️"}
                </button>
              </div>
            ))
          ) : searchTerm.length > 0 ? (
            <p className="noResults">No recipes found for "{searchTerm}"</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RecipeSearch;
