import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePageIndex from "./pages/HomePage/HomePageIndex";
import SeriesIndex from "./pages/Series/SeriesIndex";
import FilmIndex from "./pages/Films/FilmIndex";
import NewAndPopularIndex from "./pages/NewAndPopular/NewAndPopularIndex";
import MyList from "./pages/MyList/MyList";
import Languages from "./pages/Languages/Languages";
import Layout from "./layout/Layout";
import Login from "./pages/Login/LoginIndex";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path='/' element={<Layout />}>
            <Route path="/home" element={<HomePageIndex />} />
            <Route path="/series" element={<SeriesIndex />} />
            <Route path="/films" element={<FilmIndex />} />
            <Route path="/new-and-popular" element={<NewAndPopularIndex />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/browse-by-languages" element={<Languages />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
