"use client";

import { NewChatIcon } from "../assets/NewChatIcon";
import { useChatContext } from "../contexts/ChatContext";
import { Convo } from "../types/app-types";
import { generateId } from "../utilities/generateId";

export function NewChatButton() {
  const { addConvo } = useChatContext();

  const handleClick = () => {
    const newConversation: Convo = {
      id: generateId(),
      title: "New chat",
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
