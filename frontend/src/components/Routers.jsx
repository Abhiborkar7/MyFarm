import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import ProfilePage from "./ProfilePage";
import Signin from "./Signin";
import Signup from "./Signup";
import App from "../App";
import ChatRoom from "./ChatRoom";
import Chats from "./Chats";
import Discussion from "./Discussion";
import Experts from "./Experts";
import Stores from "./Stores";
import Store from "./Store";

const Routers = () => {
  const farmerId = 'farmer1';
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/stores" element={<Stores />}></Route>
          <Route path="/stores/:name" element={<Store />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/home" />} />
        <Route path="/discussion" element={<Chats />} />
        <Route path="/discussion/:chatId" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
