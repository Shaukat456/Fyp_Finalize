import { useEffect, useState } from "react";
import Login from "./Login";
import Manage from "./Manage";

export const Landing = ({ setUser }) => {
  return <>{<Login setUser={setUser} />}</>;
};
