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
import WinePromotionPage from "./pages/WinePromotionPage";
import PairingPage from "./pages/PairingPage";
import PairingWritePage from "./pages/PairingWritePage";
import PairingDetailPage from "./pages/PairingDetailPage";
import ReviewPage from "./pages/ReviewPage";
import ReviewWritePage from "./pages/ReviewWritePage";
import ReviewDetailPage from "./pages/ReviewDetailPage";
import ProfilePage from "./pages/ProfilePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ProfileEditPage from "./pages/ProfileEditPage";

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
        path: "privacy",
        element: <PrivacyPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "profile/edit",
        element: <ProfileEditPage />,
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
      {
        path: "wines/promotion",
        element: <WinePromotionPage />,
      },
      {
        path: "pairing",
        element: <PairingPage />,
      },
      {
        path: "pairing/write",
        element: <PairingWritePage />,
      },
      {
        path: "pairing/:id",
        element: <PairingDetailPage />,
      },
      {
        path: "review",
        element: <ReviewPage />,
      },
      {
        path: "review/write",
        element: <ReviewWritePage />,
      },
      {
        path: "review/:id",
        element: <ReviewDetailPage />,
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
