import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./pages/layout/RootLayout";
import LoginPage from "./pages/LoginPage";
import LoginLayout from "./pages/layout/LoginLayout";
import WinePage from "./pages/WinePage";
import WineDetailPage from "./pages/WineDetailPage";
import WineRecommendPage from "./pages/WineRecommendPage";
import WineComparePage from "./pages/WineComparePage";
import SignUpPage from "./pages/SignUpPage";
import OAuthRedirectPage from "./pages/OAuthRedirectPage";

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
      {
        path: "wines/recommend",
        element: <WineRecommendPage />,
      },
      {
        path: "wines/compare",
        element: <WineComparePage />,
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
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "oauth-redirect",
        element: <OAuthRedirectPage />,
      },
    ],
  },
]);

export default router;
