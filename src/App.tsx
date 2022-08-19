import React, { useEffect, useState } from "react";
import { extendTheme, ChakraProvider, type ThemeConfig } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store";
import "./App.css";
import Auth from "@/views/Auth";
import Main from "@/views/Main";
import Api from "./api";
import ThemePicker from "./components/theme/ThemePicker";
import Socket from "./socket";
import SocketProvider from "./components/Providers/SocketProvider";
import MainProvider from "./components/Providers/MainProvider";

Api.init(store);
Socket.init(store);

const App = () => (
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainProvider />}>
            <Route path="/auth" element={<Auth />} />
            <Route index element={<Main screen="home" />} />
            <Route path="/profile" element={<Main screen="profile" />} />
            <Route path="/createGame" element={<Main screen="createGame" />} />
            <Route path="/game" element={<Main screen="game" />} />
            <Route path="/history" element={<Main screen="history" />} />
          </Route>
        </Routes>
        <ThemePicker />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);

export default App;
