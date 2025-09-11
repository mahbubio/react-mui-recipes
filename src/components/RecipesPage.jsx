import { useEffect } from "react";
import useRecipes from "../hooks/useRecipes";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utilities/constants";
import { Box, Button, Grid, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { style } from "/styles/RecipesPage.style";

const RecipesPage = () => {
  const { getRecipes, recipes } = useRecipes();
  const navigate = useNavigate();

  useEffect(() => {
    getRecipes();
  }, []);

  const handleGoToEditor = (id) => navigate(`${ROUTES.RECIPES}/${id}`);
  const handleGoToCreator = () => navigate(ROUTES.RECIPES_ADD);

  return (
    <div style={{ height: "100vh" }}>
      <Box sx={style.container}>
        {/* <Button
          variant="contained"
          color="success"
          startIcon={<MenuBookIcon />}
          onClick={handleGoToCreator}
          sx={style.addRecipeButton}
        >
          Add recipepe
        </Button> */}
        <Box component="section" sx={{ p: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            {recipes?.map((recipe) => (
              <Grid container spacing={2}>
                <Box key={recipe.id} sx={style.recipeCard}>
                  <img
                    style={{
                      width: "12em",
                    }}
                    src="https://www.everyday-delicious.com/wp-content/uploads/2024/02/pierogi-ruskie-everyday-delicious-5-500x375.jpg"
                  />

                  <Typography variant="h6" gutterBottom>
                    {recipe.name}
                  </Typography>
                  <Button
                    startIcon={<EditIcon sx={style.editButtonIcon} />}
                    size="small"
                    color="primary"
                    variant="outlined"
                    onClick={() => handleGoToEditor(recipe.id)}
                    sx={style.editButtonIcon}
                  >
                    Edit
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default RecipesPage;
