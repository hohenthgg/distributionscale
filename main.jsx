import React from "react";
import { createRoot } from "react-dom/client";
import EscalaApp from "./distribuicao-escala.jsx";

const el = document.getElementById("root");
const loading = document.getElementById("loading");
if (loading) loading.style.display = "none";
createRoot(el).render(<EscalaApp />);
