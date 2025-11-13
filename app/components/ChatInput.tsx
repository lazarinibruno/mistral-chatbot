"use client";

import React, { useState } from "react";

export function ChatInput() {
  const [msg, setMsg] = useState("");

  const handleSumbmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!msg.trim()) return; // Prevents user from submiting whitespaces

    alert(msg);

    setMsg("");
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
