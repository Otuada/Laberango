import React from "react";
import { Router } from "./Routers/Routes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Constants/theme";
import { GlobalStyled } from "./GlobalStyled";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled/>
      <Router/>
    </ThemeProvider>
  )
}

export default App;
