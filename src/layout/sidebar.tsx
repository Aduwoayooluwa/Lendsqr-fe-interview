import { Link } from "@tanstack/react-router"

import { businesses, customers, settings } from "../helper/sidebar-option"
import "./style/sidebar.scss"
import { DashboardIcon, DropdownSidebarIcon, LogoutIcon, SwitchOrgIcon } from "../assets"
import { Menu, Dropdown, Divider } from 'antd';
import { useLayoutNavigation } from "../hooks/use-layout";
import { useAuth } from "../hooks/use-auth";



type SidebarItemProps = {
    icon: string
    name: string
}

const DownOutlined = () => {
    return (
        <img className="dropdown-switch-org" src={DropdownSidebarIcon} alt="switch org" />
    )
}


const SidebarItem = ({ icon, name }: SidebarItemProps) => {
    return (
        <li className="sidebar-item-li">
            <Link to="/user" className="sidebar-item">
                <img src={icon} alt={`${name} icon`} />
                <p>{name}</p>
            </Link>
        </li>
    )
}

const SwitchOrgDropdown = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        Organization 1
      </Menu.Item>
      <Menu.Item key="2">
        Organization 2
      </Menu.Item>
      <Menu.Item key="3">
        Organization 3
      </Menu.Item>
    </Menu>
  );

  return (
      <Dropdown className="switch-org"  trigger={['click']} overlay={menu}>
          
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <img src={SwitchOrgIcon} className="switch-org-briefcase" alt="switch organization briefcase" />
        Switch Organization <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default function Sidebar({ children }: Readonly<{
    children: React.ReactNode
}>) {
    const { setIsNavBarOpen } = useLayoutNavigation() 
    const { onLogout } = useAuth();

    const toggleNavigationClose = () => setIsNavBarOpen(false);

    return (
        <div className="sidebar-layout">
            <div className="sidebar-fixed">
            <div className="sidebar-style">
                <ul>
                    <SwitchOrgDropdown />
                </ul>
                <ul>
                    <SidebarItem name={"Dashboard"} icon={DashboardIcon} />
                </ul>
                <ul className="sidebar-ul">
                    <p className="" style={{ color: "#545F7D", padding: "3px 20px", fontSize: "12px" }}>
                        CUSTOMERS</p>

                    {
                        customers.map((item) => (
                            <SidebarItem key={item.id} icon={item.icon} name={item.name} />
                        ))
                    }
                </ul>

                <ul className="sidebar-ul">
                    <p className="" style={{ color: "#545F7D", padding: "3px 20px", fontSize: "12px" }}>
                        BUSINESSES</p>
                    {
                        businesses.map((item) => (
                            <SidebarItem key={item.id} icon={item.icon} name={item.name} />
                        ))
                    }
                </ul>

                <ul className="sidebar-ul" style={{marginBottom: "60px"}}>
                    <p className="" style={{ color: "#545F7D", padding: "3px 20px", fontSize: "12px" }}>
                        SETTINGS</p>
                    {
                        settings.map((item) => (
                            <SidebarItem key={item.id} icon={item.icon} name={item.name} />
                        ))
                    }
                </ul>

                <Divider  />

                <ul className="sidebar-ul" onClick={onLogout}>
                    <SidebarItem icon={LogoutIcon} name="Logout"/>
                </ul>

                <p style={{fontSize: "12px", color: "#213F7D", paddingLeft: "20px", marginTop:"12px"}}>v1.2.0</p>
                </div>
                 </div>
            <div className="sidebar-children" onClick={toggleNavigationClose}>
                {children}
            </div>

        </div>
    )
}