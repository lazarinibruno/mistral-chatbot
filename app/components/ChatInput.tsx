"use client";

import React, { useState } from "react";
import { ApiResponse } from "../types/api-types";
import { chatMsg } from "../types/app-types";
import { generateId } from "../utilities/generateId";
import { useChatContext } from "../contexts/ChatContext";

type message = { content: string; role: "user" | "assistant" };

export function ChatInput() {
  const [usrInput, setUsrInput] = useState("");

  const { chats, addChatMsg, setResponseLoading, currentConvo } =
    useChatContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent reloading of the page when user user submits an input
    if (!usrInput.trim()) return; // Prevent the user from sending whitespaces

    send();

    setUsrInput("");
  };

  const send = async () => {
    // Here, there are two operations: an enqueue operation that runs async and updates the state of the messages.
    // However, since it is async, it may not be completed in time before the POST is made, so we need to construct an
    // array to send locally.

    // Moroever, the chat completion endpoint is stateless, so sending the whole conversation is needed.

    const msg: message = {
      // Message type needed for the API
      content: usrInput,
      role: "user",
    };
    const apiMsgs: message[] = [...chats, msg].map((m) => ({
      content: m.content,
      role: m.role,
    })) as message[];

    // Create message object to update the internal message array in the context.
    const userMsg: chatMsg = {
      id: generateId(),
      content: msg.content,
      role: msg.role,
    };
    addChatMsg(userMsg); // async

    setResponseLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "mistral-small-latest",
          messages: apiMsgs,
        }),
      });

      const body: ApiResponse = await response.json();

      body.choices.forEach((choice) => {
        const chatMsg: chatMsg = {
          id: generateId(),
          content: choice.message.content,
          role: choice.message.role,
        };
        addChatMsg(chatMsg);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setResponseLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-2xl mx-auto space-x-2"
    >
      <input
        type="text"
        placeholder="Ask anything"
        value={usrInput}
        onChange={(e) => setUsrInput(e.target.value)}
        className="input flex-1"
      />

      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
}
