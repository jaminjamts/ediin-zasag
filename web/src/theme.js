"use client";
import { Roboto, Playfair_Display } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

let theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    background: {
      default: "#fff",
      paper: "#f8f8f8",
    },
    text: {
      primary: "#111",
      secondary: "#444444",
      disabled: "#777777",
    },
    divider: "#e0e0e0",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      color: "#111",
      fontWeight: 800,
      fontFamily: playfair.style.fontFamily,
      fontSize: "2rem", // default
      "@media (max-width:600px)": { fontSize: "2rem" },
      "@media (min-width:600px) and (max-width:900px)": { fontSize: "1.5rem" },
      "@media (min-width:900px)": { fontSize: "2.5rem" },
    },
    h2: {
      color: "#111",
      fontWeight: 700,
      fontFamily: playfair.style.fontFamily,
      fontSize: "2rem",
      "@media (max-width:600px)": { fontSize: "0.875rem" },
      "@media (min-width:600px) and (max-width:900px)": { fontSize: "1.25rem" },
      "@media (min-width:900px)": { fontSize: "2rem" },
    },
    h3: {
      color: "#111",
      fontWeight: 600,
      fontFamily: playfair.style.fontFamily,
      fontSize: "1.5rem",
      "@media (max-width:600px)": { fontSize: "0.75rem" },
      "@media (min-width:600px) and (max-width:900px)": { fontSize: "1rem" },
      "@media (min-width:900px)": { fontSize: "1.5rem" },
    },
    body1: { color: "#222", fontSize: "1.4rem" },
    body2: { color: "#333", fontSize: "1.4rem" },
  },

  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          "&.MuiAlert-standardInfo": {
            backgroundColor: "#60a5fa",
            color: "#fff",
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
