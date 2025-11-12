export type DrawerLayoutProps = {
  drawerId?: string;
  navBarTitle?: string;
  children: React.ReactNode;
};

export default function DrawerLayout({
  drawerId = "drawer-1",
  navBarTitle = "Navbar Title",
  children,
}: DrawerLayoutProps) {}
