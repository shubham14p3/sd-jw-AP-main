import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HomeAnalytics from "./pages/home-analytics";
import Layout from "./component/layout";
import DashboardSass from "./pages/dashboard-sass";
import Statistics from "./pages/statistics";
import Inbox from "./pages/inbox";
import Email from "./pages/email";
import ToDoList from "./pages/to-dolist";
import Integrations from "./pages/Integrations";
import Pricing from "./pages/pricing";
import Teams from "./pages/team";
import Gallery from "./pages/gallery";
import Faq from "./pages/faq";
import Calendar from "./pages/calendar";
import Error from "./pages/error";
import Login from "./pages/login";
import CreateAccount from "./pages/create-account";
import LoginLayout from "./component/layout/LoginLayout";
import ForgetPassword from "./pages/forget-password";
import ConfirmPassword from "./pages/confirm-password";
import Verification from "./pages/verification";
import PasswordSuccess from "./pages/password-success";
import Transaction from "./pages/transaction";
import Notifications from "./pages/notifications";
import Users from "./pages/user";
import History from "./pages/history";
import ProfileOverview from "./pages/profile-overview";
import Overview from "./pages/profile-overview/overview";
import Activities from "./pages/profile-overview/activities";
import Projects from "./pages/profile-overview/projects";
import Documents from "./pages/profile-overview/documents";
import Gallery2 from "./pages/profile-overview/gallery";
import Settings from "./pages/settings";
import PersonalInfo from "./pages/settings/personal-info";
import PaymentMethod from "./pages/settings/payment-method";
import NotificationSetting from "./pages/settings/notification-setting";
import LoginActivity from "./pages/settings/login-activity";
import ChangePassword from "./pages/settings/change-password";
import SettingsFaq from "./pages/settings/faq";
import TermsAndCondition from "./pages/settings/terms-and-conditions";
import SupportTicket from "./pages/support-ticket";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginLayout,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/confirm-password",
        element: <ConfirmPassword />,
      },
      {
        path: "/verificaiton",
        element: <Verification />,
      },
      {
        path: "/password-success",
        element: <PasswordSuccess />,
      },
    ],
  },
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home-analytics",
        element: <HomeAnalytics />,
      },
      {
        path: "/dashboard-sass",
        element: <DashboardSass />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/inbox",
        element: <Inbox />,
      },
      {
        path: "/email",
        element: <Email />,
      },
      {
        path: "/to-dolist",
        element: <ToDoList />,
      },
      {
        path: "/integrations",
        element: <Integrations />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/transaction",
        element: <Transaction />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/user",
        element: <Users />,
      },

      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/profile-overview",
        Component: ProfileOverview,
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: "activities",
            element: <Activities />,
          },
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "documents",
            element: <Documents />,
          },
          {
            path: "gallery",
            element: <Gallery2 />,
          },
        ],
      },
      {
        path: "/settings",
        Component: Settings,
        children: [
          {
            index: true,
            element: <PersonalInfo />,
          },
          {
            path: "payment-method",
            element: <PaymentMethod />,
          },
          {
            path: "notification-setting",
            element: <NotificationSetting />,
          },
          {
            path: "login-Activity",
            element: <LoginActivity />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
          {
            path: "faq",
            element: <SettingsFaq />,
          },
          {
            path: "terms-and-conditions",
            element: <TermsAndCondition />,
          },
        ],
      },
      {
        path: "/support-ticket",
        element: <SupportTicket />,
      },
    ],
  },
  {
    path: "/error-page",
    element: <Error />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
