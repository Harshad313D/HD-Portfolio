import "./App.css";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Foot from "./components/Foot";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <About />
          <Skills />
          <Project />
          <Education />
          <Resume />
          <Contact />
          <Foot />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <About />
          <Skills />
          <Project />
          <Education />
          <Resume />
          <Contact />
          <Foot />
        </>
      ),
    },
    {
      path: "/Skills",
      element: (
        <>
          <Navbar />
          <Skills />
          <Foot />
        </>
      ),
    },
    {
      path: "/Experience",
      element: (
        <>
          <Navbar />
          <Experience />
          <Foot />
        </>
      ),
    },
    {
      path: "/Project",
      element: (
        <>
          <Navbar />
          <Project />
          <Foot />
        </>
      ),
    },
    {
      path: "/Education",
      element: (
        <>
          <Navbar />
          <Education />
          <Foot />
        </>
      ),
    },

    {
      path: "/Resume",
      element: (
        <>
          <Navbar />
          <Resume />
          <Contact />
          <Foot />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Foot />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
