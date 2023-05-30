import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  Projects,
  ProjectPage,
  MapOverview,
  MapOverviewInformational
} from "./components";
import ProjectMeta from "./components/ProjectMeta";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/mapoverview" element={<MapOverview />} />
      <Route path="/mapoverviewinformational" element={<MapOverviewInformational />} />
      <Route path="/projects/project-meta/new" element={<ProjectMeta />} />
      <Route path="/projects/:projectName" element={<ProjectPage />} />
    </Routes>
  </Router>
);