import { Outlet } from "react-router-dom";
import Navbar from "../component/Shared/Navbar";
import Footer from "../component/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
