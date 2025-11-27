import React from "react";
import { Markdown } from "./Markdown";

interface ChatBubbleProps {
  chatId: string;
  role: string;
  children: React.ReactNode;
}

/**
 * ChatBubble Component
 * --------------------
 *
 *
 * Renders a singe chat message styled according to the role of the sender (user or assistant)
 *
 *
 * @param {string} chatId - Unique identifier for the message
 * @param {string} role - "user" | "assisntant" determines the allignment and styling of the chat bubble
 * @param {React.ReactNode} children - The message content to display inside the bubble
 */
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
