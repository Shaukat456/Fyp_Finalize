// import Navbar from "@/Components/Navbar";
// import Sidebar from "@/Components/Sidebar";

import Navbar from "@/Components/Navbar";
import React, { useEffect, useState } from "react";
import ChequeEntryPage from "./ChequesEntry";
// import Login from "./Login";
// import { SidebarComponent } from "../Components/SidebarComponents";

export default function Home() {
  const [user, setUser] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  useEffect(() => {
    console.log("render");
  }, [user]);
  return (
    <>
      <ChequeEntryPage />
      {/* <Navbar /> */}
    </>
  );
}
