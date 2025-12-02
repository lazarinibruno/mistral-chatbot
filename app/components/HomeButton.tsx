"use client";

import { HomeIcon } from "../assets/HomeIcon";
import { NEW_CHAT_TITLE } from "../constants/constants";
import { useChatContext } from "../contexts/ChatContext";
import { Convo } from "../types/app-types";
import { generateId } from "../utilities/generateId";

/**
 * HomeButton component
 * --------------------
 *
 * Button with house icon. Clicking on it takes creates a new conversation.
 *
 * @returns
 */
export function HomeButton() {
  const { addConvo } = useChatContext();

  const handleClick = () => {
    const id = generateId();
    const newConversation: Convo = {
      id: id,
      title: NEW_CHAT_TITLE,
      title_set: false,
      messages: [],
    };
    addConvo(newConversation);
  };

  return (
    <button
      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
      data-tip="Homepage"
      onClick={handleClick}
    >
      <HomeIcon />
      <span className="is-drawer-close:hidden">Homepage</span>
    </button>
  );
}
