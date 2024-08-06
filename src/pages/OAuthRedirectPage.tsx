import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OAuthRedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get("accessToken");

    if (accessToken) {
      localStorage.setItem("token", accessToken);

      navigate("/");
    } else {
      navigate("/login");
    }
  }, [location, navigate]);

  return <div>Processing OAuth callback...</div>;
};

export default OAuthRedirectPage;
