import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RecipesPage from "./components/RecipesPage";
import RecipeEditorPage from "./components/RecipeEditorPage";
import RecipeCreatorPage from "./components/RecipeCreatorPage";
import { APP_TITLE, ROUTES } from "./utilities/constants";
import { Typography, Box, CssBaseline, Button } from "@mui/material";
import Navbar from "./components/Navbar";
// import { ThemeProvider, useThemeContext } from "./contexts/ThemeContext";
import {
  ThemeProvider,
  createTheme,
  useColorScheme,
} from "@mui/material/styles";

const App = () => {
  //const { color, dispatch } = useThemeContext();
  const { mode, setMode } = useColorScheme();
  if (!mode) return null;

  console.log(mode);

  return (
    <BrowserRouter>
      <Navbar
        handleModeChange={() => setMode(mode === "light" ? "dark" : "light")}
      />
      <main>
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={<Navigate to={ROUTES.RECIPES} />}
          />
          <Route path={ROUTES.RECIPES_ADD} element={<RecipeCreatorPage />} />
          <Route path={ROUTES.RECIPES} element={<RecipesPage />} />
          <Route path={ROUTES.RECIPE} element={<RecipeEditorPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

const Wrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};
const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});
export default Wrapper;
