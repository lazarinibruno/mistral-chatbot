import React from "react";
import { useChatContext } from "../contexts/ChatContext";
import LoadingDots from "./LoadingDots";

interface ChatBubbleProps {
  chatId: string;
  role: string;
  children: React.ReactNode;
}

export function ChatBubble({ chatId, role, children }: ChatBubbleProps) {
  let bubbleType = role === "user" ? "chat-end" : "chat-start";

  return (
    <div className={`chat ${bubbleType}`}>
      <div key={chatId} className="chat-bubble">
        {children}
      </div>
    </div>
  );
}
