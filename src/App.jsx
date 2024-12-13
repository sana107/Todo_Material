import React, { useState } from "react";
import Navbar from "./components/Navbar";
import {
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [color, setColor] = useState(false);

  const handleTheme = () => {
    setColor(color ? false : true);
  };

  //#16325B,7A1CAC,#E4B1F0
  const theme = createTheme({
    palette: {
      primary: {
        main: color ? "#433878" : "#F5EFFF",
      },
      secondary: {
        main: color ? "#E5D9F2" : "#001F3F",
      },
      success: {
        main: color ? "#A594F9" : "#EAD8B1",
      },
      warning: {
        main: color ? "#E4B1F0" : "#6A9AB0",
      },
      error: {
        main: color ? "#CDC1FF" : "#3A6D8C",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar handleTheme={handleTheme} />
      <Container sx={{ padding: "80px 0px" }}>
        <Typography align="center" variant="h4">
           Todo App
        </Typography>
        <Form />
        <ListGroup />
      </Container>
    </ThemeProvider>
  );
};

export default App;
