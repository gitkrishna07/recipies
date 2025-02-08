import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './favorite.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (idMeal) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.idMeal !== idMeal);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container">
      <h2>Your Favorite Recipes</h2>

      <div className="recipes">
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <div key={recipe.idMeal} className="recipe">
              <Link to={`/recipe/${recipe.idMeal}`} className="imgContainer">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              </Link>
              <h3>{recipe.strMeal}</h3>
              <button onClick={() => removeFavorite(recipe.idMeal)} className=".addFavorite">
                Remove from Favorites ❌
              </button>
            </div>
          ))
        ) : (
          <p>No favorites added yet! ❤️</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
