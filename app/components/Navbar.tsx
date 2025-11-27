import { SidebarToggleIcon } from "../assets/SidebarToggleIcon";
import { NewChatButton } from "./NewChatButton";

export type NavbarProps = {
  drawerId: string;
  title?: string;
};

/**
 * Navbar component
 * --------------------
 *
 * Renders a Navbar containing a sidebar toggle button and a new chat button
 * @param {string} -
 * @param {title} -
 */
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
