import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";
import { DEFAULT_NAVBAR_TITLE, DRAWER_ID } from "../constants/constants";

export type DrawerLayoutProps = {
  drawerId?: string;
  navBarTitle?: string;
  children: React.ReactNode;
};

/**
 * DrawerLayout component
 * --------------------
 *
 * Renders the Navbar, Sidebar and content
 *
 * @param {string} drawerId - Unique identifier to handle the sidebar toggle logic
 * @param {string} navBarTitle - Title displayed in the Navbar
 * @param {React.ReactNode} children - The content to display inside the DrawerLayout
 */
export default function DrawerLayout({
  drawerId = DRAWER_ID,
  navBarTitle = DEFAULT_NAVBAR_TITLE,
  children,
}: DrawerLayoutProps) {
  return (
    <div className="drawer lg:drawer-open">
      {/* IMPORTANT: the input id must match the htmlFot in Navbar/Sidebar */}
      <input id={drawerId} type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <Navbar drawerId={drawerId} title={navBarTitle} />

        <div className="p-4">{children}</div>
      </div>

      <Sidebar drawerId={drawerId} />
    </div>
  );
}
