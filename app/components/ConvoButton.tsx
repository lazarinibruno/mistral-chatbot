"use client";

import { useChatContext } from "../contexts/ChatContext";
import { Convo } from "../types/app-types";

interface ChatButtonProps {
  convo: Convo;
  title: string;
}

/**
 * ConvoButton component
 * --------------------
 *
 * Button that appears on the sidebar to select different conversation.
 *
 * @param {Convo} convo - Conversation related to this button
 * @param {string} title - Title of the conversation
 */
export function ConvoButton({ convo, title }: ChatButtonProps) {
  const { setCurrentConvo } = useChatContext();
  const handleClick = () => {
    setCurrentConvo(convo);
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn-ghost font-normal w-full justify-start"
    >
      {title}
    </button>
  );
}
