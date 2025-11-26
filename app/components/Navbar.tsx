import { SidebarToggleIcon } from "../assets/SidebarToggleIcon";
import { NewChatButton } from "./NewChatButton";

export type NavbarProps = {
  drawerId: string;
  title?: string;
};

export function Navbar({ drawerId, title = "Navbar Title" }: NavbarProps) {
  return (
    <nav className="navbar w-full bg-base-300">
      <SidebarToggleIcon drawerId={drawerId} />
      <div className="flex flex-row px-4">
        <div>{title}</div>
      </div>

      <NewChatButton />
    </nav>
  );
}

export default Navbar;
