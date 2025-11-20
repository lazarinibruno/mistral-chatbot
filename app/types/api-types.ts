/** These are the types required to work with Mistral AI's chat completion endpoint.
 * 
 * https://docs.mistral.ai/api/endpoint/chat#operation-chat_completion_v1_chat_completions_post
 * 
 */


/**
 * @typedef {Object} Usage - Represents the usage in tokens of the API  endpoint
 * 
 */
export type Usage = {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
}

/**
 * @typedef {Object} Message - Represents the Message field of the API response.
 * 
 * @property {string} role - Sender of the message; either `assistant` or `user`
 * @property {unknown | null} tool_calls - Not sure what this is
 * @property {string} content - Content of the message
 * 
 */
export type Message = {
  role: "assistant" | "user";
  tool_calls: unknown | null;
  content: string;
}

export type Choice = {
  index: number;
  finish_reason: string;
  message: Message;
}

/**
 * @typedef {Object} ApiResponse
 * 
 * @property {string} id - Response ID
 * @property {number} created - Date and time of response
 * @property {string} model - Model being used
 * @property {Usage} usage - Token usage
 * @
 */
export type ApiResponse = {
  id: string;
  created: number;
  model: string;
  usage: Usage;
  object: string;
  choices: Array<Choice>;
}
