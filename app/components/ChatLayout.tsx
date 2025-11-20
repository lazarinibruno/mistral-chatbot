"use client";

import { useChatContext } from "../contexts/ChatContext";
import { chatMsg } from "../types/app-types";
import { ChatBubble } from "./ChatBubble";

export function ChatLayout() {
  const { chats } = useChatContext();

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="flex justify-center">
        <div className="flex flex-col w-full max-w-2xl space-y-4 p-4">
          {chats.map((chat) => (
            <ChatBubble chatId={chat.id} role={chat.role} key={chat.id}>
              {chat.content}
            </ChatBubble>
          ))}
        </div>
      </div>
    </div>
  );
}
