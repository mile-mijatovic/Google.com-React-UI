import { useRoutes } from "react-router-dom";

// Layouts
import Layout from "./layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Advertising from "./pages/Advertising";
import Business from "./pages/Business";
import HowSearchWorks from "./pages/HowSearchWorks";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Gmail from "./pages/Gmail";
import Images from "./pages/Images";
import SignIn from "./pages/SignIn";

// ----------------------------------------------------------------------

export default function Routes() {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "advertising", element: <Advertising /> },
        { path: "business", element: <Business /> },
        { path: "how-search-works", element: <HowSearchWorks /> },
        { path: "privacy", element: <Privacy /> },
        { path: "terms", element: <Terms /> },
        { path: "gmail", element: <Gmail /> },
        { path: "images", element: <Images /> },
        { path: "sign-in", element: <SignIn /> },
      ],
    },
  ]);
}
