import Sidebar from "@/Components/Sidebar";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [user] = useState(false);
  useEffect(() => {
    console.log("render");
  }, [user]);
  return (
    <>
      <div className=" flex  bg-yellow-400">
        {/* SideBar will have setUser state */}
        <Sidebar />
        <div className="flex-column flex">
          {/* <Login setUser={setUser} /> */}
        </div>
      </div>
    </>
  );
}
