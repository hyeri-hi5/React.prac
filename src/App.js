import React, {useState} from "react";
import React from "react";
import Rating from "./Rating";
import Update from "./Update";


function App() {
  
    return (
      <div>
          <Route exact path="/">
            <Rating/>
          </Route>
          <Route path="/rating">
            <Update/>
          </Route>
      </div>
    );
};

export default App;