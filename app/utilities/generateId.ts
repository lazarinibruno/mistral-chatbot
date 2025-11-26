/** Uses Web Crypto `crypto.randomUUID()` if available, falls back to a compact safe string. 
 * -- Created with AI --
 * 
 * @returns {string} Message Id
*/
export function generateId(): string {
  if (typeof crypto !== "undefined" && typeof (crypto as any).randomUUID === "function") {
    return (crypto as any).randomUUID();
  }

  // fallback: base36 timestamp + monotonic counter + small random
  const timestamp = Date.now().toString(36);
  const seqPart = (generateId as any)._seq = ((generateId as any)._seq || 0) + 1;
  const rand = Math.floor(Math.random() * 0x10000).toString(36);
  return `${timestamp}-${seqPart.toString(36)}-${rand}`;
}