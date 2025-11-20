export type chatMsg = {
  id: number;
  content: string;
  role: "assistant" | "user";
}