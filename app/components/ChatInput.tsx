"use client";

import React, { useState } from "react";

type message = { content: string; role: string };

export function ChatInput() {
  const [msg, setMsg] = useState("");

  const handleSumbmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if (!msg.trim()) return; // Prevents user from submiting whitespaces

    send();

    setMsg("");
  };

  const send = async () => {
    const mssg: message = { content: "how are you?", role: "user" };

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Conent-Type": "application/json" },
        body: JSON.stringify({
          model: "mistral-small-latest",
          messages: [mssg],
        }),
      });

      const body = await response.json();

      console.log(body);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      onSubmit={handleSumbmit}
      className="flex w-full max-w-2xl mx-auto space-x-2"
    >
      <input
        type="text"
        placeholder="Ask anything"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="input flex-1"
      />

      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
}
