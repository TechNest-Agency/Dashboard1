import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";
import App from "../App";
import Settings from "../pages/Settings/Settings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../pages/Login/Login";
import Analytics from "../pages/Dashboard/pages/Analytics/Analytics";
import Ecommerce from "../pages/Dashboard/pages/Ecommerce/Ecommerce";
import CRM from "../pages/Dashboard/pages/CRM/CRM";
import Academy from "../pages/Dashboard/pages/Acedemy/Academy";
import Logistics from "../pages/Dashboard/pages/logistics/logistics";
import HelpCenter from "../pages/Dashboard/pages/HelpCenter/HelpCenter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "crm",
        element: <CRM />,
      },
      {
        path: "ecommerce",
        element: <Ecommerce />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
       {
        path: "academy",
        element: <Academy />,
      },
        {
        path: "logistics",
        element: <Logistics/>
      },

      {
        path: "help-center",
        element: <HelpCenter/>
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
