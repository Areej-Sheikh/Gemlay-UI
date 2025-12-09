// App.js
import { Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import Login from "./components/Login";
import MainPage from "./pages/MainPage";
import Signup from "./components/Signup";
import { AuthProvider } from "./context/authContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AuthProvider>
  );
}
