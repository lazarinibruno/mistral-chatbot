/** These are the types required to work with Mistral AI's chat completion endpoint.
 * 
 * https://docs.mistral.ai/api/endpoint/chat#operation-chat_completion_v1_chat_completions_post
 * 
 */


/**
 * @typedef {Object} Usage - Token usage information
 * 
 * @property {number} completion_tokens - how many tokens were generated in the generated response
 * @property {number} prompt_tokens - how many tokens the input (user) message consumed
 * @property {number} total_tokens - sum of prompt + completion
 */
export type Usage = {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
}

/**
 * @typedef {Object} Message - The actual message sent by the API
 * 
 * @property {string} role - Sender of the message; either `assistant` or `user`
 * @property {unknown | null} tool_calls - (nullable) data about calls to external “tools” / functions, if the model used tool
 * @property {string} content - The text of the response
 * 
 */
export type Message = {
  role: "assistant" | "user";
  tool_calls: unknown | null;
  content: string;
}

/**
 * @typedef {Object} Choice - A possible completion / response. Sent in an array by the API.
 * 
 * @property {number} index - The index of this particular choice in the choices array
 * @property {string} finish_reason - A string that explains why the generation stopped
 * @property {Message} message - The actual message content of this choice
 * 
 */
export type Choice = {
  index: number;
  finish_reason: string;
  message: Message;
}

/**
 * @typedef {Object} ApiResponse - Represents the response given by the API
 * 
 * @property {string} id - A unique identifier for this particular completion request
 * @property {number} created - Date and time of response in unix time
 * @property {string} model - The model used to generate the completion
 * @property {Usage} usage - The token usage information
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
