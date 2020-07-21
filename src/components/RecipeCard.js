import React from "react";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/products/${props.recipe.id}`}>
        {/* <div
          style={{ backgroundImage: `url('${props.recipe.avatar}')` }}
          className=" w-full h-64 bg-blue bg-cover"
        ></div> */}
      </Link>
      <div className="p-3"></div>
      <h3 className="font-bold text-xl mb-3">
        <Link to={`/products/${props.recipe.id}`}>
          {props.recipe._RecipeName}
        </Link>
      </h3>
      <div className="font-bold mb-3">
        Recipe Category {props.recipe._CategoryID}
      </div>
      <a
        href={`${props.recipe._RecipeUrl}`}
        className="bg-blue-500 text-white p-2 flex justify-center w-full"
      >
        View
      </a>
    </div>
  );
}

export default RecipeCard;
