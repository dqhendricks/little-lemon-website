import { Outlet } from "react-router-dom";
import Header from "../header/Header.jsx";
import Main from "../layout/Main.jsx";
import Footer from "../layout/Footer.jsx";

function PageLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageLayout;
