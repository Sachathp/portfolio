import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsPage from "./ProjectsPage";
import ProjectDetails from "./ProjectDetails";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
