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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        mt: 3,
        width: "100%",
      }}
    >
      {/* <h2> you are editing {recipe?.name}</h2> */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        you are editing : " {recipe?.name} "
      </Typography>
      {/* <RecipeForm selectedRecipe={recipe} onChange={handleEditRecipe} /> */}
      <RecipeForm
        selectedRecipe={recipe}
        onChange={handleEditRecipe}
        onDelete={handleDeleteRecipe}
        isEdit={true}
      />
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "7em",
          mt: 2,
        }}
      >
        <Button
          color="error"
          variant="contained"
          type="button"
          sx={style.deleteButton}
          startIcon={<DeleteIcon />}
          onClick={handleDeleteRecipe}
        >
          Delete
        </Button>
      </Box> */}
    </Box>
  );
};

export default RecipeEditorPage;
