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
import Logistics from "../pages/Dashboard/pages/Logistics/Logistics";

import Email from "../pages/Dashboard/pages/Email/Email";
import Kanban from "../pages/Dashboard/pages/kanban/Kanban";
import Roles from "../pages/Dashboard/pages/Roles&Permissions/Roles/Roles";
import Permissions from "../pages/Dashboard/pages/Roles&Permissions/Permissions/Permissions";
import HelpCenter from "../pages/Dashboard/pages/HelpCenter/HelpCenter";
import Landing from "../pages/Dashboard/pages/LandingPage/Landing";
import Payment from "../pages/Dashboard/pages/LandingPage/Payment/Payment";
import Checkout from "../pages/Dashboard/pages/LandingPage/Checkout";
import Frontend from "../pages/Dashboard/pages/FrontPages/Frontend";
import UserProfile from "../pages/Dashboard/pages/Pages/UserProfile/UserProfile";
import AccountSettting from "../pages/Dashboard/pages/Pages/AccountSettting/AccountSettting";
import Pricing from "../pages/Dashboard/pages/Pages/Pricing/Pricing";
import FAQ from "../pages/Dashboard/pages/FrontPages/FAQ";
import PageFaq from "../pages/Dashboard/pages/Pages/PageFaq/PageFaq";

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
    path: "/frontend",
    element: <Frontend />,
    children: [
      {
        path: "landing",
        element: <Landing />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "help-center",
        element: <HelpCenter />,
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
        path: "app/email",
        element: <Email />,
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
        element: <Logistics />,
      },

      {
        path: "kanban",
        element: <Kanban />,
      },
      // roles...cd
      {
        path: "roles",
        element: <Roles />,
      },
      {
        path: "permissions",
        element: <Permissions />,
      },
      // pages
      {
        path: "pages/user-profile",
        element: <UserProfile />,
      },
      {
        path: "pages/account-settings",
        element: <AccountSettting />,
      },
      {
        path: "pages/pricing",
        element: <Pricing />,
      },
      {
        path: "pages/faq",
        element: <PageFaq />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
