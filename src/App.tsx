import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import LoginPage from './components/Login/Login'

const App = (props: any) => {
  return (
    <div className="app-wrapper">
      <Header />
      {/* <Navbar state={props.state.sidebar} /> */}
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login/" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
