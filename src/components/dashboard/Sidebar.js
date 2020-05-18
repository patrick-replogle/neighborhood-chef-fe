import React from "react";

import { Link } from "react-router-dom";

//icons imports
import { Icon } from "@iconify/react";
import houseDoor from "@iconify/icons-bi/house-door";
import calendarOutlined from "@iconify/icons-ant-design/calendar-outlined";
import calendarPlus from "@iconify/icons-mdi/calendar-plus";
// import outlineNotifications from "@iconify/icons-ic/outline-notifications";
// import outlineSettings from "@iconify/icons-ic/outline-settings";
// import bxMessageSquareDots from "@iconify/icons-bx/bx-message-square-dots";
// import bxFoodMenu from "@iconify/icons-bx/bx-food-menu";
import chefIcon from "@iconify/icons-whh/chef";

//component import
import SidebarButton from "./SidebarButton";

const buttonList = [
  {
    active: false,
    link: "dashboard",
    text: "My Neighborhood",
    icon: houseDoor,
  },
  {
    active: false,
    link: "view-events",
    text: "Calendar",
    icon: calendarOutlined,
  },
  // {
  //   active: false,
  //   link: "notifications",
  //   text: "Notifications",
  //   icon: outlineNotifications,
  // },
  {
    active: false,
    link: "create-event",
    text: "Create Event",
    icon: calendarPlus,
  },
  // {
  //   active: false,
  //   link: "recipes",
  //   text: "Shared Recipes",
  //   icon: bxFoodMenu,
  // },
  // {
  //   active: false,
  //   link: "messages",
  //   text: "Messages",
  //   icon: bxMessageSquareDots,
  // },
];

// const settingButton = {
//   active: false,
//   link: "settings",
//   text: "Settings",
//   icon: outlineSettings,
// };

const Sidebar = ({ active }) => {
  return (
    <div className="sidebar-container">
      <div>
        <Link to="/">
          <div className="left-side-header">
            <span style={{ color: "#58D473", marginRight: "5px" }}>
              <Icon width="1.1em" icon={chefIcon} />
            </span>
            <span>Neighborhood Chef</span>
          </div>
        </Link>
        <nav className="nav-container">
          {buttonList.map((ele) => (
            <SidebarButton
              {...ele}
              active={active === ele.link}
              key={ele.text}
            />
          ))}
        </nav>
      </div>
      {/* <div className="settings-button">
        <SidebarButton
          {...settingButton}
          active={active === settingButton.link}
        />
      </div> */}
    </div>
  );
};

export default Sidebar;
