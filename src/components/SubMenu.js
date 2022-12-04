import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SidebarItem.css";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div>
      <div className="sidebar" onClick={item.subnav && showSubnav}>
        <Link to={item.path} className="menutitle">
          {item.title}
        </Link>
        <div>
          {item.subnav && subnav
            ? item.iconOpened
            : item.subnav
            ? item.iconClosed
            : null}
        </div>
      </div>
      <div className="subnav">
        {subnav &&
          item.subnav.map((item, index) => (
            <Link to={item.path} key={index}>
              {item.title}{" "}
            </Link>
          ))}
      </div>
    </div>
  );
};
export default SubMenu;
