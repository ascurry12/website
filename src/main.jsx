import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../routes/Layout.jsx";
import About from "../routes/About.jsx";
import Gallery from "../routes/Gallery.jsx";
import Projects from "../routes/Projects.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index={true} element={<App />} />
      <Route path="/" element={<Layout />}>
        <Route index={false} path="/about" element={<About />} />
        <Route index={false} path="/artwork" element={<Gallery />} />
        <Route index={false} path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
