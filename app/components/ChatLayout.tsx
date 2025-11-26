"use client";

import { useChatContext } from "../contexts/ChatContext";
import { ChatBubble } from "./ChatBubble";
import LoadingDots from "./LoadingDots";

export function ChatLayout() {
  const { chats, isResponseLoading } = useChatContext();

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="flex justify-center">
        <div className="flex flex-col w-full max-w-3xl space-y-4 p-4">
          <div>
            {chats.map((chat, i) => (
              <ChatBubble chatId={chat.id} role={chat.role} key={i}>
                {chat.content}
              </ChatBubble>
            ))}
          </div>
          <div>{isResponseLoading() && <LoadingDots />}</div>
        </div>
      </div>
    </div>
  );
}
