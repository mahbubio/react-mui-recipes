export const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "50vw",
    marginLeft: "auto",
    marginRight: "auto",
    mt: 9,
  },
  instructionBox: {
    mb: 2,
    mt: 1,
  },
  ingrediantBox: {
    display: "flex",
    gap: "0.2em",
    flexWrap: "wrap",
    mb: 2,
  },

  deleteButton: {
    mt: 5,
    //animation
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      borderColor: "primary.main",
      boxShadow: 5,
      transform: "scale(1.02)",
    },
  },
  addIngredientButton: {
    //animation
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      borderColor: "primary.main",
      boxShadow: 5,
      transform: "scale(1.02)",
    },
  },
  saveButton: {
    //animation
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      borderColor: "primary.main",
      boxShadow: 5,
      transform: "scale(1.02)",
    },
  },
};
