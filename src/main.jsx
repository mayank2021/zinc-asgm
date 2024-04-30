import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext.jsx";
import { ProductContextProvider } from "./context/ProductContext.jsx";
import ShowToast from "./components/ShowToast.jsx";
import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2979ff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <CartContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </ThemeProvider>
        </CartContextProvider>
      </ProductContextProvider>
      <ShowToast />
    </BrowserRouter>
  </React.StrictMode>
);
