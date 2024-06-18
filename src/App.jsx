import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from "./pages/projects/Projects";
import Certifications from "./pages/certifications/Certifications";
import Contacts from "./pages/contacts/Contacts";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/gallery",
      element: <Gallery/>,
    },
    {
      path: "/projects",
      element: <Projects/>,
    },
    {
      path: "/certifications",
      element: <Certifications/>,
    },
    {
      path: "/contacts",
      element: <Contacts/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
