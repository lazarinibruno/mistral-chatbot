import { SidebarToggleIcon } from "../assets/SidebarToggleIcon";
import { DEFAULT_NAVBAR_TITLE } from "../constants/constants";
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
 *
 * @param {string} drawerId - Unique drawer identifier to handle the sidebar toggle logic
 * @param {string} title - Title to show on the Navbar
 */
export function Navbar({
  drawerId,
  title = DEFAULT_NAVBAR_TITLE,
}: NavbarProps) {
  return (
    <nav className="navbar w-full bg-base-300">
      <SidebarToggleIcon drawerId={drawerId} />
      <div className="flex flex-row items-center gap-2 px-4">
        <img src="/lil_robot-32.png" alt="Logo" width={32} height={32} />
        <div>{title}</div>
      </div>

      <NewChatButton />
    </nav>
  );
}

export default Navbar;
