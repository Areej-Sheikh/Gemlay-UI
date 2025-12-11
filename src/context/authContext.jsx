import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./context";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const backendURL =
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_BACKEND_URL_PROD
      : import.meta.env.VITE_BACKEND_URL_DEV;

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${backendURL}/api/auth/me`, {
        credentials: "include",
        withCredentials: true,
      });
      setUser(res.data.user);
    } catch {
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `${backendURL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      setUser(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};