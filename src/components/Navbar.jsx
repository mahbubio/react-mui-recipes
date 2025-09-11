import { Box, Typography, AppBar, Toolbar, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import { style } from "/styles/Navbar.style";
import { ROUTES } from "../utilities/constants";
import UserThemeButton from "./UserThemeButton";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Navbar = ({ handleModeChange }) => {
  const navigate = useNavigate();

  const handleGoToCreator = () => navigate(ROUTES.RECIPES_ADD);

  return (
    <AppBar>
      <Toolbar sx={{ display: "flex" }}>
        <Box sx={style.header} onClick={() => navigate("/")}>
          <RamenDiningIcon sx={style.appIcon} />
          <Typography variant="h5" gutterBottom sx={style.appName}>
            {" "}
            RECIPES APP
          </Typography>
        </Box>

        <Box sx={style.navAddRecipe}>
          <Button
            variant="contained"
            color="success"
            startIcon={<MenuBookIcon />}
            onClick={handleGoToCreator}
          >
            Add Recipe
          </Button>
        </Box>
        <Box>
          <UserThemeButton handleClick={handleModeChange} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
