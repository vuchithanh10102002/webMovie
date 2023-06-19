import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePageIndex from "./pages/HomePage/HomePageIndex";
import MyList from "./pages/MyList/MyList";
import Layout from "./layout/Layout";
import Login from "./pages/Login/LoginIndex";
import Detail from "./pages/Detail/DetailIndex";
import Register from "./pages/Register/RegisterIndex";
import Genres from "./pages/Genres/GenresIndex";
import MyAccount from "./pages/MyAccount/MyAccount";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Layout />}>
            <Route path="/home" element={<HomePageIndex />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/genre/:pathname" element={<Genres />}/>
            <Route path="/my-account" element={<MyAccount />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
