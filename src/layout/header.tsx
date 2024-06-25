import { DropdownProfileIcon, NotificationBellIcon, ProfileImage } from "../assets";
import {  Search } from "../components/input";
import { Logo } from "../components/logo";
import "./style/header.scss"
import { Link } from "@tanstack/react-router";
import { Menu, Dropdown, Avatar } from 'antd';
import { Rotate as Hamburger } from 'hamburger-react'
import { useLayoutNavigation } from "../hooks/use-layout";
import MobileSidebar from "./mobile-sidebar";
import { useAuth } from "../hooks/use-auth";
import toast from "react-hot-toast";

const UserProfileDropdown = () => {
  const { onLogout } = useAuth();
  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => {
        toast.success("Abeg use this theme!!!")
      }}> 
        Change Theme
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://lendsqr.freshdesk.com/support/home">
          Help
        </a>
      </Menu.Item>
      <Menu.Item key="2" onClick={onLogout}>
        <a href="https://blog.lendsqr.com/" >
          Blog
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-d-user-dropdown" onClick={e => e.preventDefault()}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={ProfileImage} size={48} style={{ marginRight: '8px' }} />
          <p className="p-text-name">Adedeji</p>  <img src={DropdownProfileIcon} alt="dropdown" style={{ marginLeft: '8px' }} />
        </div>
      </a>
    </Dropdown>
  );
};
export default function Header() {
  const { isNavBarOpen, setIsNavBarOpen } = useLayoutNavigation();

  return (
    <div className="header">
      <div className="header-container">
        <div className="mobile-nav-menu">
          <Hamburger color="#213F7D" toggled={isNavBarOpen} toggle={setIsNavBarOpen} />
        </div>
        <Logo />
        <div className="search">
          <Search />
        </div>

        <div className="header-right-items">

          <Link to={"/"} className="p-docs">Docs</Link>

          <img src={NotificationBellIcon} className="notification-bell" alt="notification bell" />

          <div className="display-name">
            <UserProfileDropdown />

          </div>
        </div>
      </div>
      <MobileSidebar />
    </div>
  )
}