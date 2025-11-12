import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";

export type DrawerLayoutProps = {
  drawerId?: string;
  navBarTitle?: string;
  children: React.ReactNode;
};

export default function DrawerLayout({
  drawerId = "drawer-1",
  navBarTitle = "Navbar Title",
  children,
}: DrawerLayoutProps) {
  return (
    <div className="drawer lg:drawer-open">
      {/* IMPORTANT: the input id must match the htmlFot in Navbar/Sidebar */}
      <input id={drawerId} type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <Navbar drawerId={drawerId} title={navBarTitle} />

        <div className="p-4">{children}</div>

        <Sidebar drawerId={drawerId} />
      </div>
    </div>
  );
}
