import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RecipesPage from "./components/RecipesPage";
import RecipeEditorPage from "./components/RecipeEditorPage";
import RecipeCreatorPage from "./components/RecipeCreatorPage";
import { APP_TITLE, ROUTES } from "./utilities/constants";
import { Typography, Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      {/* material overwrite so we use it */}
      <CssBaseline />
      <Header />

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

export default App;
