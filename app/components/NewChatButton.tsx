"use client";

import { NewChatIcon } from "../assets/NewChatIcon";
import { useChatContext } from "../contexts/ChatContext";
import { Convo } from "../types/app-types";
import { generateId } from "../utilities/generateId";

/**
 * NewChatButton component
 * --------------------
 *
 * Button to start a new conversation.
 *
 */
export function NewChatButton() {
  const { addConvo } = useChatContext();

  const handleClick = () => {
    const id = generateId();
    const newConversation: Convo = {
      id: id,
      title: "New Chat",
      title_set: false,
      messages: [],
    };
    addConvo(newConversation);
  };

  return (
    <button className="ml-auto btn btn-l btn-ghost" onClick={handleClick}>
      <NewChatIcon />
    </button>
  );
}
