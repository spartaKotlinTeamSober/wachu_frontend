import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./pages/layout/RootLayout";
import LoginPage from "./pages/LoginPage";
import LoginLayout from "./pages/layout/LoginLayout";
import WinePage from "./pages/WinePage";
import WineDetailPage from "./pages/WineDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "wines",
        element: <WinePage />,
      },
      {
        path: "wines/:id",
        element: <WineDetailPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
