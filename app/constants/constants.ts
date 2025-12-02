/** 
 * Constants used across mutliple files in the app.
*/

/**
 * Chat completion model
 */
export const MODEL: string = "mistral-small-latest";

/**
 * URL for Mistral's chat completion endpoint 
 */
export const CHAT_COMPLETION_URL: string = "https://api.mistral.ai/v1/chat/completions";

/**
 * Path to local server endpoint
 */
export const LOCAL_SERVER_ENDPOINT: string = "/api/chat" 

/**
 * API auth key
 */
export const API_AUTH: string = `Bearer ${process.env.MISTRAL_API_KEY ?? ""}`

/**
 * Content type for the API request
 */
export const CONTENT_TYPE: string = "application/json";

/**
 * Identifier to handle the sidebar toggle logic
 */
export const DRAWER_ID: string = "drawer-1"

/**
 * Default navbar title
 */
export const DEFAULT_NAVBAR_TITLE: string = "Navbar title"

/**
 * New chat title
 */
export const NEW_CHAT_TITLE: string = "New Chat"