import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Nav from "./Component/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Mosaic } from "react-loading-indicators";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        navigate("/home");
      }, 500);
    }
  }, [loading]);
  return (
    <div
      className=""
      style={{
        height: loading ? "100dvh" : "0",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#252525",
        zIndex: "10",
        position: "absolute",
        top: 0,
        left: 0,
        transformOrigin: "top",
        transition: "all 0.5s ease-in-out",
      }}
    >
      {loading && (
        <Mosaic
          style={{
            color: "forestgreen",
          }}
          size="large"
          text=""
          textColor=""
        />
      )}
    </div>
  );
};
