import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Rating from "./Rating";
import Update from "./Update";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Rating />
      </Route>
      <Route exact path="/rating/:dayName">
        <Update />
      </Route>
    </BrowserRouter>
  );
}
export default App;

