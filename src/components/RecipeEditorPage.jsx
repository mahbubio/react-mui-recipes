import useRecipes from "../hooks/useRecipes";
import RecipeForm from "./RecipeForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ROUTES } from "../utilities/constants";
import { Button, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { style } from "/styles/RecipeEditorPage.style";

// TODO: RENAME TO RecipeEditorPage
const RecipeEditorPage = () => {
  const [recipe, setRecipe] = useState();
  const { deleteRecipe, getRecipe, updateRecipe } = useRecipes();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => navigate(ROUTES.RECIPES);

  useEffect(() => {
    if (!id) return;
    getRecipe(id).then((selectedRecipe) => setRecipe(selectedRecipe));
  }, [id]);

  const handleDeleteRecipe = () => {
    deleteRecipe(recipe.id);
    handleGoBack();
  };

  const handleEditRecipe = (updatedRecipe) => {
    updateRecipe(updatedRecipe);
    handleGoBack();
  };

  return (
    <Box sx={style.container}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        you are editing : " {recipe?.name} "
      </Typography>
      <RecipeForm
        selectedRecipe={recipe}
        onChange={handleEditRecipe}
        onDelete={handleDeleteRecipe}
        isEdit={true}
      />
    </Box>
  );
};

export default RecipeEditorPage;
