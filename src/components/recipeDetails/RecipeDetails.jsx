import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./recipeDetails.module.css";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const { id } = useParams();
  const URL_DETAILS = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const res = await fetch(URL_DETAILS);
        const data = await res.json();
        if (data.meals) {
          const meal = data.meals[0];
          setRecipe(meal);
          let tempIngredients = [];
          let tempMeasures = [];

          for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
              tempIngredients.push(meal[`strIngredient${i}`]);
              tempMeasures.push(meal[`strMeasure${i}`]);
            }
          }

          setIngredients(tempIngredients);
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) return <h2>Loading...</h2>;

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />

        <h3>Ingredients & Measures</h3>
        <ul className={classes.ingredients}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient} - {recipe[`strMeasure${index + 1}`]}
            </li>
          ))}
        </ul>

        <h3>Instructions</h3>
        <p>{recipe.strInstructions}</p>

        <Link to="/" className={classes.backButton}>⬅ Back to Search</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;

