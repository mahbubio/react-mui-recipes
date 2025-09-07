import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import Input from "@mui/material/Input";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Chip, TextField, Box } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useNavigate } from "react-router-dom";
import { style } from "/styles/RecipeForm.style";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RecipeForm = ({ selectedRecipe, onChange, onDelete, isEdit }) => {
  // TODO: Improvement: replace ingredients, setIngredients with updatedRecipe.ingredients
  const [ingredient, setIngredient] = useState("");
  const [updatedRecipe, setUpdatedRecipe] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    // it means we are editing recipe
    if (selectedRecipe) {
      setUpdatedRecipe(selectedRecipe);
    }

    // it means we are creating not editing recipe
    if (!selectedRecipe) {
      const uid = uuidv4();

      const initialRecipe = {
        id: uid,
        name: "",
        instruction: "",
        ingredients: [],
      };

      setUpdatedRecipe(initialRecipe);
    }
  }, [selectedRecipe]);

  const handleAddIngredient = () => {
    setUpdatedRecipe((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ingredient],
    }));
    setIngredient("");
  };

  const handleRemoveIngredient = (ingredient) => {
    setUpdatedRecipe((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((i) => i !== ingredient),
    }));
  };

  const handleUpdateIngredient = (e) => setIngredient(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(updatedRecipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={style.container}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2, mt: 2 }}
        >
          <Button
            type="button"
            color="primary"
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </Box>
        <TextField
          label="Name"
          variant="outlined"
          sx={{ mb: 2, mt: 1 }}
          InputLabelProps={{ shrink: true }}
          value={updatedRecipe?.name}
          onChange={(e) =>
            setUpdatedRecipe({ ...updatedRecipe, name: e.target.value })
          }
        />

        <TextField
          multiline
          placeholder="This box is for instruction"
          sx={style.instructionBox}
          // style={{ width: 200 }}

          value={updatedRecipe?.instruction}
          onChange={(e) =>
            setUpdatedRecipe({
              ...updatedRecipe,
              instruction: e.target.value,
            })
          }
        />
        <Box sx={style.ingredientBox}>
          {updatedRecipe?.ingredients?.map((ing) => (
            <Chip
              //add avatar
              key={ing}
              label={ing}
              color="secondary"
              onClick={() => handleRemoveIngredient(ing)}
            />
          ))}
        </Box>
        <Box>
          <TextField
            value={ingredient}
            onChange={handleUpdateIngredient}
            label="Ingredient"
            variant="outlined"
            fullWidth
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {isEdit && onDelete && (
              <Button
                color="error"
                variant="contained"
                type="button"
                sx={style.deleteButton}
                startIcon={<DeleteIcon />}
                onClick={onDelete}
              >
                Delete
              </Button>
            )}
            {/* <Input value={ingredient} onChange={handleUpdateIngredient} /> */}
            <Box display="flex" gap={2} mt={5} justifyContent={"flex-end"}>
              <Button
                variant="contained"
                color="success"
                type="button"
                sx={style.addIngredientButton}
                startIcon={<RestaurantIcon />}
                onClick={handleAddIngredient}
              >
                Add Ingredient
              </Button>

              <Button
                type="submit"
                variant="contained"
                sx={style.saveButton}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </Box>
            {/* moved ingredients list to top of field */}
            {/* <div>
            {updatedRecipe?.ingredients?.map((ing) => (
              <Chip
                key={ing}
                label={ing}
                onClick={() => handleRemoveIngredient(ing)}
              />
            ))}
          </div> */}
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default RecipeForm;
