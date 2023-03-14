import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Actors, Movies, Navbar, MovieInformation, Profile } from "./index";
// import useStyles from "./Styles";
// import Movies from "./Movies/Movies";

const App = () => {
  // const classes = useStyles();

  return (
    <BrowserRouter>
      <CssBaseline />
      {/* Hello - Filmify */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/actor/:id" element={<Actors />} />
        <Route path="/movieinformation/:id" element={<MovieInformation />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
