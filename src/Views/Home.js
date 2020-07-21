import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import RecipeCard from "../components/RecipeCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home() {
  const recipeurl = `http://localhost:8090/recipes/1`;

  let recipes = useAxiosGet(recipeurl);

  let content = null;

  if (recipes.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (recipes.loading) {
    content = <Loader></Loader>;
  }

  if (recipes.data) {
    content = recipes.data.map((recipe, key) => (
      <div key={key}>
        <RecipeCard recipe={recipe} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Recipes</h1>
      {content}
    </div>
  );
}

export default Home;
