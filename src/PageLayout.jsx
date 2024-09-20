import { Outlet } from "react-router-dom";
import Header from "./features/header/Header.jsx";
import Footer from "./features/footer/Footer.jsx";

function PageLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default PageLayout;
