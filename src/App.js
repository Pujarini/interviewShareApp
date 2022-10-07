import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import { AuthContextProvider } from "./context/AuthContext";
import Bookmarks from "./Pages/Bookmarks";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/experience/:id" element={<Experience />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
