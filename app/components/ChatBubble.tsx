import React from "react";

interface ChatBubbleProps {
  chatId: string;
  role: string;
  children: React.ReactNode;
}

export function ChatBubble({ chatId, role, children }: ChatBubbleProps) {
  // For some reason that I have not figured out, the dynamic rendering of the chat bubbles only works by doing this
  // if statement instead of simply: className={chat chat-${(role === "user" ? "end" : "start")}}.
  let bubbleType = role === "user" ? "chat-end" : "chat-start";

  return (
    <div className={`chat ${bubbleType}`}>
      <div key={chatId} className="chat-bubble">
        {children}
      </div>
    </div>
  );
}
