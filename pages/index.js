// import Navbar from "@/Components/Navbar";
// import Sidebar from "@/Components/Sidebar";

import React, { useEffect, useState } from "react";

import { SidebarComponent } from "@/Components/SidebarComponent";
import { useRouter } from "next/router";
// import Login from "./Login";
// import { SidebarComponent } from "../Components/SidebarComponents";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Login");
  }, []);
  return (
    <>
      <SidebarComponent />
    </>
  );
}
