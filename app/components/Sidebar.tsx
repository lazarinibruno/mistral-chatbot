"use client";

import { useChatContext } from "../contexts/ChatContext";
import { ConvoButton } from "./ConvoButton";
import { HomeButton } from "./HomeButton";

export type SidebarProps = {
  drawerId: string;
};

/**
 * Sidebar component
 * --------------------
 *
 * @param {string} drawerId - Unique identifier to handle the sidebar toggle logic
 * @returns
 */
export function Sidebar({ drawerId }: SidebarProps) {
  const { convos } = useChatContext();

  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      {/* clicking the overlay will toggle the checkbox (close drawer on mobile) */}
      <label
        htmlFor={drawerId}
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
        <div className="flex flex-col">
          <ul className="menu w-full grow">
            <li>
              <HomeButton />
            </li>
          </ul>

          <div className="flex flex-col pl-4 is-drawer-close:hidden">
            <p className="pb-2">Your chats</p>
            <ul className="list space-y-2">
              {convos.map((convo) => (
                <li key={convo.id}>
                  <ConvoButton convo={convo} title={convo.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
