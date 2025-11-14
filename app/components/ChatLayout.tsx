"use client";

import { ChatBubble } from "./ChatBubble";

export function ChatLayout() {
  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="flex justify-center">
        <div className="flex flex-col w-full max-w-2xl space-y-4 p-4">
          <ChatBubble chatId={0} isUser={true}>
            <p>Hi, how are you</p>
          </ChatBubble>
          <ChatBubble chatId={0} isUser={false}>
            <p>Good, and you?</p>
          </ChatBubble>
        </div>
      </div>
    </div>
  );
}
