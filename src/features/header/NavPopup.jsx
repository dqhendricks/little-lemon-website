import { useState } from "react";
import { ListIcon } from "../../assets/icons.jsx";
import Button from "../../components/Button.jsx";
import NavList from "../../components/NavList.jsx";

function NavPopup() {
  const [status, setStatus] = useState("hidden");

  function toggleShow() {
    if (status === "hidden") {
      setStatus("display");
      setTimeout(() => {
        setStatus("showing");
      }, 30);
    }
    if (status === "showing") setStatus("hiding");
  }

  function handleTransitionEnd() {
    if (status === "hiding") setStatus("hidden");
  }

  return (
    <>
      <Button variant="image" onClick={toggleShow}>
        <ListIcon />
      </Button>
      {status !== "hidden" && (
        <div
          className={`popup ${status}`}
          onClick={toggleShow}
          onTransitionEnd={handleTransitionEnd}
        >
          <NavList />
        </div>
      )}
    </>
  );
}

export default NavPopup;
