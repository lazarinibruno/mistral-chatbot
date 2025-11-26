"use client";

import { HomeIcon } from "../assets/HomeIcon";
import { SettingsIcon } from "../assets/SettingsIcon";
import { useChatContext } from "../contexts/ChatContext";
import { ConvoButton } from "./ConvoButton";

export type SidebarProps = {
  drawerId: string;
};

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
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                <HomeIcon />
                <span className="is-drawer-close:hidden">Homepage</span>
              </button>
            </li>

            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                <SettingsIcon />
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
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
