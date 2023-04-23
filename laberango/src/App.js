import React from "react";
import { Router } from "./Routers/Routes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Constants/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  )
}

export default App;
