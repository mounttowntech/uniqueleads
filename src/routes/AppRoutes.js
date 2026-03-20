// import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";

import Login from "../components/Login";
import Home from "../pages/Home";


const { Routes, Route } = require("react-router-dom");

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
  );
}

export default AppRoutes;

