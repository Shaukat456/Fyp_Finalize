import React, { useState } from "react";
import { Sidebar, MenuItem } from "daisyui";

export const SidebarComponent = () => {
  const [activeItem, setActiveItem] = useState("GENERAL");

  const menuItems = [
    {
      text: "GENERAL",
      icon: "home",
      active: activeItem === "GENERAL",
    },
    {
      text: "App",
      icon: "apps",
      active: activeItem === "App",
    },
    {
      text: "Ecommerce",
      icon: "shopping-cart",
      active: activeItem === "Ecommerce",
    },
    {
      text: "Analytics",
      icon: "chart-bar",
      active: activeItem === "Analytics",
    },
    {
      text: "Booking",
      icon: "calendar",
      active: activeItem === "Booking",
    },
    {
      text: "File",
      icon: "file-alt",
      active: activeItem === "File",
    },
  ];

  return (
    <Sidebar>
      {menuItems.map(item => (
        <MenuItem
          key={item.text}
          text={item.text}
          icon={item.icon}
          active={item.active}
          onClick={() => setActiveItem(item.text)}
        />
      ))}
    </Sidebar>
  );
};
