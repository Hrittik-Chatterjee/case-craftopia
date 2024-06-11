import { Outlet } from "react-router-dom";

import Footer from "../component/Shared/Footer";
import NavbarFix from "../component/Shared/NavbarFix";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <NavbarFix />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
