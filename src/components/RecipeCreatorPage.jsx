import { useNavigate } from "react-router-dom";
import useRecipes from "../hooks/useRecipes";
import RecipeForm from "./RecipeForm";
import { ROUTES } from "../utilities/constants";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// TODO: Rename to recipe creator page
const RecipeCreatorPage = () => {
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();

  const handleGoBack = () => navigate(ROUTES.RECIPES);

  const handleAddRecipe = (newRecipe) => {
    addRecipe(newRecipe);
    handleGoBack();
  };

  return <RecipeForm onChange={handleAddRecipe} isEdit={false} />;

  // {/* <Button
  //   color="secondary"
  //   variant="contained"
  //   sx={{ mt: 2, mb: 4 }}
  //   justifyContent="flex-start"
  //   startIcon={<ArrowBackIcon />}
  //   onClick={handleGoBack}
  // >
  //   Go back
  // </Button> */}
};

export default RecipeCreatorPage;
