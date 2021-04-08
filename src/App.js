import React, { useState, lazy, Suspense, useCallback } from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'emotion-theming';
import { Helmet } from 'react-helmet';
import Spinner from './Containers/Spinner/index';
import NavBar from './Containers/NavBar/index';
import ErrorPage from './Containers/ErrorPage';
import { Global, css } from '@emotion/core';

const Home = lazy(() => import('./Containers/LandingPage/index'));

const About = lazy(() => import('./Containers/AboutPage/index'));

const Blogs = lazy(() => import('./Containers/BlogPage/index'));

const Projects = lazy(() => import('./Containers/ProjectsPage/index'));

const HomePage = () => (
  <Suspense fallback={<Spinner />}>
    <Home />
  </Suspense>
);

const AboutPage = () => (
  <Suspense fallback={<Spinner />}>
    <About />
  </Suspense>
);

const BlogsPage = () => (
  <Suspense fallback={<Spinner />}>
    <Blogs />
  </Suspense>
);

const ProjectsPage = () => (
  <Suspense fallback={<Spinner />}>
    <Projects />
  </Suspense>
);

const App = () => {
  const LightTheme = {
    bg: '#eee',
    fontColor: '#51595D',
    accentColor: '#007bff',
    projectColor: '#ffffff',
    projectShadow: '#00000015',
    projectShadowHover: '#b8b8d9',
  };

  const DarkTheme = {
    bg: '#161625',
    fontColor: 'rgb(189, 189, 189)',
    accentColor: '#007bff',
    projectColor: '#1e1e30',
    projectShadow: '#000',
    projectShadowHover: '#000100',
  };
  const [isDarkTheme, setDarkTheme] = useState(
    localStorage.getItem('isDarkTheme') === 'true'
  );
  const ThemeHandler = useCallback(
    (event) => {
      event.preventDefault();
      setDarkTheme(!isDarkTheme);
      localStorage.setItem('isDarkTheme', !isDarkTheme);
    },
    [isDarkTheme]
  );

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Neeraj Sewani</title>
          <meta name="description" content="Neeraj's portfolio website." />
          <link rel="canonical" href="https://neerajsewani.dev" />
        </Helmet>
        <Global
          styles={css`
            body {
              background: ${isDarkTheme ? DarkTheme.bg : LightTheme.bg};
            }
          `}
        />
        <NavBar {...{ isDarkTheme, ThemeHandler }} />
        <Router>
          <HomePage path="/" />
          <AboutPage path="/about" />
          <BlogsPage path="/blogs" />
          <ProjectsPage path="projects" />
          <ErrorPage path="*" />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
