import React from "react";
import { Markdown } from "./Markdown";

interface ChatBubbleProps {
  chatId: string;
  role: string;
  children: React.ReactNode;
}

export function ChatBubble({ chatId, role, children }: ChatBubbleProps) {
  let bubbleType = role === "user" ? "chat-end" : "chat-start";

  return (
    <div className={`chat ${bubbleType} py-2`}>
      <div key={chatId} className="chat-bubble">
        <Markdown
          text={typeof children === "string" ? children : String(children)}
        />
      </div>
    </div>
  );
}
