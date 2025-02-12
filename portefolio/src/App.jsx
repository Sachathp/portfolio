import React from "react";
import AppRoutes from "./routes";
import ProjectsPage from "./ProjectsPage";
import ProjectDetails from "./ProjectDetails";
import ThemeToggleButton from "./ThemeToggleButton";

const App = () => (
  <div>
  <ThemeToggleButton />
  <AppRoutes /> 
</div>
);


export default App;



