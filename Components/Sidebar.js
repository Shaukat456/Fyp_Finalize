import React from "react";
// import { FaEllipsisV } from "react-icons/fa";
// import Avatar from "avatar.png";
// import logo from "spotfy.png";
// import Image from "next/image";

const Sidebar = () => {
  //   const [active, setActive] = useState(null);

  //   var GeneralArr;
  //   Sidebar_menu.forEach(e => {
  //     const { General } = e;
  //     GeneralArr = General;
  //   });

  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn-primary drawer-button btn">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu h-full w-80 bg-base-200 p-4 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
