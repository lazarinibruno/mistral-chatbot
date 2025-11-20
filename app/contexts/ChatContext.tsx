"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { safeParse } from "../utilities/safeParse";
import { chatMsg } from "../types/app-types";

/**
 * Context shape for chat state and actions.
 *
 * @typedef {Object} ChatContextType
 *
 * @property {Array<chatMsg>} chats - Array of chat message objects in the current conversation
 * @property {(message: chatMsg) => void} addChatMsg - Adds a chat message to the current conversation
 */
type ChatContextType = {
  chats: Array<chatMsg>;
  addChatMsg: (message: chatMsg) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

/**
 * Hook to access the chat context.
 *
 * @returns {ChatContextType} The chat context containing `chats` and `addChatMsg`
 *
 * @throws {Error} If the hook is used outside of a `ChatProvider`
 */
export const useChatContext = (): ChatContextType => {
  const ctx = useContext(ChatContext);

  // If someone calls useChatContext() but it isn't wrapped in <ChatProvider>, the hook returns an error
  if (!ctx) {
    throw new Error("useChatContext must be used withing a ChatProvider");
  }

  return ctx;
};

/**
 * Provider component that supplies chat state and actions to children.
 *
 * @param {ReactNode} children - React children to render within the provider
 * @returns {JSX.Element} - ChatContext provider wrapping `children`
 *
 * Behavior:
 * - Initializes the `chats` from LocalStorage; returns an empty array on the server.
 * - Saves `chats` to LocalStorage whenever `chats` changes
 * - `addChatMsg(message)` appends a new message to the `chats` if its id isn't already present
 */
export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chats, setChats] = useState<chatMsg[]>(() => {
    if (typeof window === "undefined") return []; // Prevent access to local storage on server side

    const raw = localStorage.getItem("chats");

    return safeParse<chatMsg[]>(raw, []);
  });

  // Keeps local storage in sync
  useEffect(() => {
    try {
      localStorage.setItem("chats", JSON.stringify(chats));
    } catch {
      console.error("Failed to write chats to local storage");
    }
  }, [chats]);

  /**
   * Appends message to current chat and prevents duplicates.
   *
   * @param {chatMsg} message - Message that is appended to the current chat
   */
  const addChatMsg = (message: chatMsg) => {
    setChats((prev) => {
      if (prev.some((chatMsg) => chatMsg.id === message.id)) return prev;
      return [...prev, message];
    });
  };

  const value = useMemo(() => ({ addChatMsg, chats }), [chats]);

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
