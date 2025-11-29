"use client";

import React from "react";
import { DeleteChatIcon } from "../assets/DeleteChatIcon";
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
  const { setCurrentConvo, deleteConvo } = useChatContext();
  const handleClick = () => {
    setCurrentConvo(convo);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteConvo(convo.id);
  };

  return (
    <div className="w-full" role="none">
      <div
        className="flex items-center justify-between w-full"
        // optional: make whole row keyboard-focusable (if you prefer keyboard on the row)
      >
        <button
          onClick={handleClick}
          className="flex-1 btn btn-ghost font-normal justify-start text-left truncate"
          aria-label={`Open conversation ${title}`}
          title={title}
        >
          <span className="truncate">{title}</span>
        </button>

        <button
          onClick={handleDelete}
          className="btn btn-ghost btn-sm ml-2"
          aria-label={`Delete conversation ${title}`}
          title="Delete"
        >
          <DeleteChatIcon />
        </button>
      </div>
    </div>
  );
}
