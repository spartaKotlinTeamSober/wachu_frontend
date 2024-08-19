import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
