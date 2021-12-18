import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import UsersContainer from "./components/Users/UsersContainer"
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      {/* <Navbar state={props.state.sidebar} /> */}
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route exact path="/dialogs" element={<DialogsContainer />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
