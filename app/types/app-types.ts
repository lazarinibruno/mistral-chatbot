
/**
 * @typedef {Object} chatMsg - An internal type that has a unique id for each message
 * 
 * @property {number} id - Unique identifier
 * @property {string} content - The text of the message
 * @property {string} role - The sender of the message; either "user" or "assistant"
 */
export type chatMsg = {
  id: string;
  content: string;
  role: "assistant" | "user";
}

export type Convo = {
  id: string;
  title: string;
  messages: chatMsg[];
}