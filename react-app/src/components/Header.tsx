import React from "react";
import {NavLink} from "react-router-dom";

type MenuProps = {
  menuItems: Vector<string>;
};

export default function Header({menuItems}): React.FC<MenuProps> {
  return (
    <div className="flexbox inline">
      <ul className="text-left">
        {menuItems.map((item: string, index: string) => (
          <li key={index} className={`menu-item-${index}`}>
            <NavLink to={`/${item}`}>{item}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
