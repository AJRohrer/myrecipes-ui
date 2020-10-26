import React from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";

class RecipeHome extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }

  getUserIdCookie(key){
    return document.cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .reduce(
      (accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value),
      }),
      {}
    )[key];;
  };

  componentDidMount() {
    console.log("testing");
    console.log("UserId to request: " + this.getUserIdCookie("userid"));
    axios
      .get("http://localhost:8090/recipes/" + this.getUserIdCookie("userid"))
      .then((response) => {
        console.log("Recipes captured " + response.data[0]._RecipeName);
        this.setState({...this.state, recipes: [...response.data]});
        console.log("Recipe data response for userID: " + this.getUserIdCookie("userid") + " | " + response);
      })
      .catch((error) => {
        console.log("There was a recipe request error.");
      });
  }

  buildContent() {
    console.log("Entering buildContent()");
    this.content = this.recipes.data.map((recipe, key) => (
      <div key={key}>
        <RecipeCard recipe={recipe} />
      </div>
    ));
    console.log("Content: " + this.content);
  }

  render() {
    console.log("These are the recipes: " + this.state.recipes.data);
      return (
        <div>
          <h1 className="font-bold text-2xl">Recipes</h1>
          {
          this.state.recipes.data.map((recipe,key) => (
              <div key={key}>
                <RecipeCard recipe={recipe} />
              </div>
          ))};
        </div>
      );
  }
}

export default RecipeHome;