import Navigations from "./components/Navigations";

import "./App.css";
import Company from "./components/Company";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Main = ({ children }) => {
  return (
    <>
      <Navigations />
      {children}
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main>
          <Company />
          <Testimonial />
        </Main>
      </>
    ),
  },
  {
    path: "/feature",
    element: <Main><div>Feature</div></Main>,
  },
  {
    path: "/pricing",
    element: <Main><div>Pricing</div></Main>,
  },
  {
    path: "/blog",
    element: <Main><div>Blog</div></Main>,
  },
  {
    path: "/about",
    element: <Main><div>About</div></Main>,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
