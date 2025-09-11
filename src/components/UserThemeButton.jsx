import React from "react";
import { Button } from "@mui/material";
import DarkModelIcon from "@mui/icons-material/DarkMode";
import LightModelIcon from "@mui/icons-material/LightMode";

// const UserThemeButton = ({ handleClick }) => {
//   return <Button onClick={handleClick}>changeTheme</Button>;
// };

const UserThemeButton = ({ mode, handleClick }) => {
  return (
    <Button
      onClick={handleClick}
      startIcon={mode === "light" ? <DarkModelIcon /> : <LightModelIcon />}
      variant="contained"
    >
      {mode === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
};

export default UserThemeButton;
