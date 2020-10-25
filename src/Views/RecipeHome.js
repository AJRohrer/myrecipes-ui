import React from "react";
import Loader from "../components/Loader";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";

class RecipeHome extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: this.getUserRecipes(),
      content: <Loader></Loader>,
    };
  }

  getUserIdCookie = () => {
    return 4;
  };

  componentDidMount() {
    this.getUserRecipes();
  }

  getUserRecipes() {
    console.log("this is the cookie data: " + this.getUserIdCookie());
    axios
      .get("http://localhost:8090/recipes/2")
      .then((response) => {
        console.log("Recipes captured" + response.data[0]._RecipeName);
        document.cookie = "recipes=" + response.data;
        this.buildContent();
        return response;
      })
      .catch((error) => {
        console.log("There was a recipe request error.");
      });
  }

  buildContent() {
    this.content = this.recipes.data.map((recipe, key) => (
      <div key={key}>
        <RecipeCard recipe={recipe} />
      </div>
    ));
  }

  // if (recipes.error) {
  //   console.log("got an error");
  //   content = <p>There was an error please refresh or try again later.</p>;
  // }

  // if (recipes.loading) {
  //   console.log("still loading");
  //   content = <Loader></Loader>;
  // }

  // if (recipes.data) {
  //   console.log("got a response");
  //   content = recipes.data.map((recipe, key) => (
  //     <div key={key}>
  //       <RecipeCard recipe={recipe} />
  //     </div>
  //   ));
  // }

  //TODO: Add search capability to search for a recipe

  render() {
    return (
      <div>
        <h1 className="font-bold text-2xl">Recipes</h1>
        {this.content}
      </div>
    );
  }
}

export default RecipeHome;
