import './css/reset.css';
import './css/style.css';
import './css/App.css';
import * as React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Leaderboard from './components/Leaderboard';
import About from './components/About';

export default function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Main />
    },
    {
      path: '/leaderboard',
      element: <Leaderboard />
    },
    {
      path: '/about',
      element: <About />
    }
  ])

  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

