import React from "react";
import Loader from "../components/Loader";
import RecipeCard from "../components/RecipeCard";
import { useAxiosGet } from "../Hooks/HttpRequests";
import { useParams } from "react-router-dom";

function RecipeHome() {
  const { userid } = useParams();
  const recipeurl = `http://localhost:8090/recipes/1`;

  let recipes = useAxiosGet(recipeurl);

  let content = null;

  if (recipes.error) {
    console.log("got an error");
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (recipes.loading) {
    console.log("still loading");
    content = <Loader></Loader>;
  }

  if (recipes.data) {
    console.log("got a response");
    content = recipes.data.map((recipe, key) => (
      <div key={key}>
        <RecipeCard recipe={recipe} />
      </div>
    ));
  }

  //TODO: Add search capability to search for a recipe

  return (
    <div>
      <h1 className="font-bold text-2xl">Recipes</h1>
      {content}
    </div>
  );
}

export default RecipeHome;
