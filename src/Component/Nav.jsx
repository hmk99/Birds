import { useEffect, useState, useRef } from "react";
import logo from "../Images/BIRDs - DZ.png";
import "../App.css";
import Hamburger from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

function Nav() {
  const location = useLocation();
  let active = location.pathname;
  const [open, setOpen] = useState(false);
  const mobile = useMediaQuery("(max-width:1200px)");
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  console.log(active);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClicks);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClicks);
    };
  }, [open]);

  const handleOutsideClicks = (event) => {
    if (mobile) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
  };

  useEffect(() => {
    if (!mobile && open) {
      setOpen(false);
    }
  }, [mobile, open]);

  return (
    <nav
      style={{
        transform: !show && "scaleY(0)",
        opacity: !show && 0,
        pointerEvents: !show && "none",
      }}
    >
      <img src={logo} alt="Logo" />
      {mobile ? (
        <div ref={btnRef} className="icon_ham">
          <Hamburger
            toggled={open}
            toggle={() => {
              setOpen(!open);
            }}
          />
        </div>
      ) : (
        <ul>
          <li style={{ color: active === "/home" && "forestgreen" }}>
            <Link to="/home">الرئيسية</Link>
          </li>
          <li style={{ color: active === "/news" && "forestgreen" }}>
            <Link to="/news">الأخبار</Link>
          </li>
          <li style={{ color: active === "/exhibitions" && "forestgreen" }}>
            <Link to="/exhibitions">المعارض</Link>
          </li>
          <li style={{ color: active === "/about" && "forestgreen" }}>
            <Link to="/about">عن النادي</Link>
          </li>
          <li style={{ color: active === "/contact" && "forestgreen" }}>
            <Link to="/contact">اتصل بنا</Link>
          </li>
        </ul>
      )}

      <div
        className="ham_menu"
        ref={menuRef}
        style={{
          pointerEvents: open && mobile ? "all" : "none",
          opacity: open && mobile ? 1 : 0,
          width: open && mobile ? "300px" : 0,
        }}
      >
        <ul>
          <li style={{ color: active === "/home" && "forestgreen" }}>
            <Link to="/home">الرئيسية</Link>
          </li>
          <li style={{ color: active === "/news" && "forestgreen" }}>
            <Link to="/news">الأخبار</Link>
          </li>
          <li style={{ color: active === "/exhibitions" && "forestgreen" }}>
            <Link to="/exhibitions">المعارض</Link>
          </li>
          <li style={{ color: active === "/about" && "forestgreen" }}>
            <Link to="/about">عن النادي</Link>
          </li>
          <li style={{ color: active === "/contact" && "forestgreen" }}>
            <Link to="/contact">اتصل بنا</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
