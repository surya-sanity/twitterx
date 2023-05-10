import Bookmarks from "../../Screens/Bookmarks/Bookmarks";
import Explore from "../../Screens/Explore";
import Home from "../../Screens/Home/Home";
import Lists from "../../Screens/Lists";
import Messages from "../../Screens/Messages";
import Notifications from "../../Screens/Notifications";
import Profile from "../../Screens/Profile";
import ActionsSidebarItem from "./ActionsSidebarItem";

export interface ActionsItem {
  name: string;
  route: string;
  component: () => JSX.Element;
  icon: string;
}

const actionItemsInitial: ActionsItem[] = [
  {
    name: "Home",
    route: "/home",
    component: Home,
    icon: "home",
  },
  {
    name: "Explore",
    route: "/explore",
    component: Explore,
    icon: "Explore",
  },
  {
    name: "Notifications",
    route: "/notifications",
    component: Notifications,
    icon: "Notifications",
  },
  {
    name: "Messages",
    route: "/messages",
    component: Messages,
    icon: "Messages",
  },
  {
    name: "Lists",
    route: "/lists",
    component: Lists,
    icon: "Lists",
  },
  {
    name: "Bookmarks",
    route: "/bookmarks",
    component: Bookmarks,
    icon: "Bookmarks",
  },
  {
    name: "Profile",
    route: "/profile",
    component: Profile,
    icon: "Profile",
  },
];

const ActionsSidebarItems = () => {
  return (
    <div className="flex flex-col gap-y-2 pr-3">
      {actionItemsInitial.map((val, index) => {
        return <ActionsSidebarItem item={val} key={index.toString()} />
      })}
    </div>
  )
}

export default ActionsSidebarItems