import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./context";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/me", {
        withCredentials: true,
      });
      setUser(res.data.user);
      console.log("User loaded:", res.data.user);
    } catch {
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/logout",
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
