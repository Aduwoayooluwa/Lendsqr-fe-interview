import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Link } from "@tanstack/react-router";
import { DashboardIcon, LogoutIcon } from "../assets";
import { businesses, customers, settings } from "../helper/sidebar-option";
import "./style/mobile-sidebar.scss";
import { useLayoutNavigation } from '../hooks/use-layout';
import { useAuth } from '../hooks/use-auth';

type SidebarItem = {
  id: string;
  name: string;
  icon: string;
};

interface SidebarSectionProps {
  title: string;
  items: SidebarItem[];
}

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

const listItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const MobileSidebar: React.FC = () => {
  const { isNavBarOpen } = useLayoutNavigation();
  const { onLogout } = useAuth();

  return (
    <LayoutGroup>
      <motion.nav
        className="mobile-sidebar"
        initial="closed"
        animate={isNavBarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        layoutId='1'
      >

        <AnimatePresence>
          {isNavBarOpen && (
            <motion.div layout className="sidebar-content">
              <SidebarSection title="Dashboard" items={[{ id: 'dashboard', name: "Dashboard", icon: DashboardIcon }]} />
              <SidebarSection title="Customers" items={customers} />
              <SidebarSection title="Businesses" items={businesses} />
              <SidebarSection title="Settings" items={settings} />
              <motion.div key={1234} layout whileHover={{ scale: 1.1 }}>
                <Link to="/" onClick={onLogout} className="grid-item">
                  <img src={LogoutIcon} alt={`logout  icon`} />
                  <span>{"Logout"}</span>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </LayoutGroup>
  );
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {


  return (
    <motion.div layout className="sidebar-section">
      <p className="section-title">{title}</p>
      <motion.div layout className="grid" variants={listItemVariants}>
        {items.map(item => (
          <motion.div key={item.id} layout whileHover={{ scale: 1.1 }}>
            <Link to="/user" className="grid-item">
              <img src={item.icon} alt={`${item.name} icon`} />
              <span>{item.name}</span>
            </Link>
          </motion.div>
        ))}

      </motion.div>

    </motion.div>
  )
}

export default MobileSidebar;
