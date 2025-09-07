import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../routes/Layout.jsx";
import DynamicPage from "../routes/DynamicPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index={true} element={<App />} />
      <Route path="/" element={<Layout />}>
        <Route index={false} path=":title" element={<DynamicPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
