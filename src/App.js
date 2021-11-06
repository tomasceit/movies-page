import * as React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme/Theme";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Genre from './pages/Genre';
import MoviesList from './pages/MoviesList';
import Search from './pages/Search';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:sort/page/:number" element={<MoviesList />} />
          <Route exact path="/genres/:genre" element={<Genre />} />
          <Route exact path="/search/:searched" element={<Search />} />
          <Route exact path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;