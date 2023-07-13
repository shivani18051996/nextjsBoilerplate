import React from "react";
import { Menu } from "primereact/menu";
const PrimeMenu = () => {
  let items = [
    { label: "Profile", icon: "pi pi-fw pi-user" },
    { label: "Settings", icon: "pi pi-fw pi-cog" },
    { separator: true },
  ];
  return (
    <div className="card flex justify-content-center">
      <Menu model={items} className="" />
    </div>
  );
};

export default PrimeMenu;
