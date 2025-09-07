export const style = {
  container: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    mt: 3,
    p: "2em",
  },
  recipeCard: {
    width: "12em",
    flex: "1 1 200px",
    // border: "1px solid grey",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    boxShadow: 3,
    //animation
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      borderColor: "primary.main",
      boxShadow: 5,
      transform: "scale(1.02)",
    },
  },

  addRecipeButton: {
    mb: 2,
    marginLeft: "auto",

    //animation
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      borderColor: "primary.main",
      boxShadow: 5,
      transform: "scale(1.02)",
    },
  },

  editButtonIcon: { color: "blue" },
  editButton: {
    margin: "0.5em",
    marginLeft: "auto",
    mt: 1,
  },
};
