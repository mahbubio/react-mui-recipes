import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import { style } from "../App.style";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box sx={style.header} onClick={() => navigate("/")}>
      <RamenDiningIcon />
      <Typography> Recipes App</Typography>
    </Box>
  );
};

export default Header;
