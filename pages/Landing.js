import { useEffect, useState } from "react";
import Login from "./Login";
import Manage from "./Manage";
import ChequesEntry from "./ChequesEntry";

export const Landing = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const User = localStorage.getItem("user");
    setUser(User);
  }, [user]);
  return <></>;
};
