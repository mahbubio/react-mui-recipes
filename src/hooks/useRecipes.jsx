import { useState } from "react";

const API_URL = "http://localhost:3000/recipes";
const headers = { "Content-Type": "application/json" };

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const deleteRecipe = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => getRecipes())
      .catch((err) => console.log(err));
  };

  const addRecipe = (newRecipe) => {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newRecipe),
      headers,
    }).catch((err) => console.log(err));
  };

  const updateRecipe = (updatedRecipe) => {
    fetch(`${API_URL}/${updatedRecipe.id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedRecipe),
      headers,
    }).catch((err) => console.log(err));
  };

  const getRecipes = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.log(err));
  };

  const getRecipe = (id) => {
    return fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  };

  return {
    recipes,
    getRecipes,
    getRecipe,
    deleteRecipe,
    updateRecipe,
    addRecipe,
  };
};

export default useRecipes;
