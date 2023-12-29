import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./Components/Main";
import { Provider } from "react-redux";
import store from "./Store/store";
function App() {
  return (
    <>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/details/:categoryId" element={<Main/>} />
        </Routes>
      </Router>
      </Provider>
      
     
      

      
    </>
  );
}

export default App;
