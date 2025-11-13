import React from "react";

interface ChatBubbleProps {
  chatId: number;
  isUser: boolean;
  children: React.ReactNode;
}

export function ChatBubble({ chatId, isUser, children }: ChatBubbleProps) {
  return (
    <div className={`chat chat-${isUser ? "end" : "start"}`}>
      <div key={chatId} className="chat-bubble">
        {children}
      </div>
    </div>
  );
}
