import React, { useContext } from "react";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Setting from "./pages/Setting";
import Single from "./pages/Single";
import Write from "./pages/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";
function App() {
  const { user } = useContext(Context);
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" /> */}
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/setting" element={user ? <Setting /> : <Register />} />
          <Route path="/post/:post" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
