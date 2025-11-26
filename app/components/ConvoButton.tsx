"use client";

import { useChatContext } from "../contexts/ChatContext";
import { Convo } from "../types/app-types";

interface ChatButtonProps {
  convo: Convo;
  title: string;
}

export function ConvoButton({ convo, title }: ChatButtonProps) {
  const { setCurrentConvo } = useChatContext();
  const handleClick = () => {
    setCurrentConvo(convo);
  };

  return (
    <button onClick={handleClick} className="btn btn-ghost font-normal">
      {title}
    </button>
  );
}
