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
import { type Convo } from "../types/app-types";
import { generateId } from "../utilities/generateId";

/**
 * Context shape for chat state and actions.
 *
 * @typedef {Object} ChatContextType
 *
 * @property {Array<chatMsg>} chats - Array of chat message objects in the current conversation
 * @property {(message: chatMsg) => void} addChatMsg - Adds a chat message to the current conversation
 */
type ChatContextType = {
  /**
   * Appends message to current conversation and prevents duplicates.
   *
   * If there is no current conversation selected, it creates a new one and sets it as the current conversation.
   *
   * @param {chatMsg} message - Message that is appended to the current chat
   */
  addChatMsg: (message: chatMsg) => void;

  /**
   * Adds a conversation to the list of active conversations and sets is as the current conversation.
   *
   * - Prevents duplication.
   *
   * @param {Convo} convo - Conversation to be added
   */
  addConvo: (convo: Convo) => void;

  /**
   * Sets the current coversation.
   *
   * @param {Convo} convo - Conversation to be set as currrent
   */
  setCurrentConvo: (convo: Convo) => void;

  /**
   * Setter for loading state.
   *
   * @param v
   */
  setResponseLoading: (v: boolean) => void;

  /**
   * Getter for the loading state.
   *
   * @returns
   */
  isResponseLoading: () => boolean;

  chats: chatMsg[];
  currentConvo: Convo | undefined;
  convos: Array<Convo>;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

/**
 * Hook to access the chat context.
 *
 * @returns {ChatContextType} - Provides the methods: addChatMsg, addConvo, setCurrentConvo, setResponseLoading, isResponseLoading
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
 * Behaviour:
 * - Initializes the `convos` array (single source of truth)
 * - Keeps it in sync whenever a conversation is added.
 * - The `chats` are derived from the `convos` array
 *
 *
 * @param {ReactNode} children - React children to render within the provider
 * @returns {JSX.Element} - ChatContext provider wrapping `children`
 */
export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [convos, setConvos] = useState<Convo[]>([]);
  const [currentConvo, setCurrentConversation] = useState<Convo>();
  const [loading, setLoading] = useState(false);

  // Get the conversations from LocalStorage
  useEffect(() => {
    const raw = localStorage.getItem("convos");
    setConvos(safeParse(raw, []));
  }, []);

  // Keeps local storage in sync

  useEffect(() => {
    try {
      localStorage.setItem("convos", JSON.stringify(convos));
    } catch {
      console.error("Failed to write conversations to local storage");
    }
  }, [convos]);

  // Derive "chats" from the currentConvo
  const chats = useMemo(() => currentConvo?.messages ?? [], [currentConvo]);

  const addConvo = (convo: Convo) => {
    setConvos((prev) => {
      if (prev.some((c) => c.id === convo.id)) return prev;
      return [...prev, convo];
    });

    setCurrentConversation(convo);
  };

  const setCurrentConvo = (convo: Convo | undefined) => {
    setCurrentConversation(convo);
  };

  const addChatMsg = (message: chatMsg) => {
    setCurrentConversation((prevCurrent) => {
      // If no current convo is  selected, add a new one
      if (!prevCurrent) {
        console.log("No current convo is selected");
        const id = generateId();
        const newConvo: Convo = {
          id: id,
          title: message.content.substring(0, 26), // first 27 chars make the title
          title_set: true,
          messages: [message],
        };
        setConvos((prev) => [...prev, newConvo]);
        setCurrentConversation(newConvo);
        return newConvo;
      }

      // Prevent duplicate messages
      if (prevCurrent.messages.some((m) => m.id === message.id))
        return prevCurrent;

      // Update the conversation object
      const updated: Convo = {
        ...prevCurrent,
        messages: [...prevCurrent.messages, message],
        title: prevCurrent.title_set
          ? prevCurrent.title
          : message.content.substring(0, 26),
        title_set: true,
      };

      // Update convos array to keep the source of truth in sync
      // Looks for the stale convo and replaces it with the updated
      setConvos((prevConvos) =>
        prevConvos.map((c) => (c.id === updated.id ? updated : c))
      );

      return updated;
    });
  };

  const setResponseLoading = (v: boolean) => setLoading(v);

  const isResponseLoading = () => loading;

  const value = useMemo(
    () => ({
      addChatMsg,
      addConvo,
      setCurrentConvo,
      setResponseLoading,
      isResponseLoading,
      chats,
      currentConvo,
      convos,
    }),
    [chats, convos, loading]
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
