/** Parses the API response from plain text to a `JSON` object
 * 
 * @param {string} raw - Raw text response from API 
 * @param {T} fallback - Value to return if the parsing fails
 * @returns {JSON} If successful returns parsed plaintext as JSON. Otherwise, returns `fallback`
 */

export function safeParse<T>(raw: string | null, fallback: T) : T {
  if (raw === null) return fallback;

  try {
    return JSON.parse(raw) as T;
  } catch {
    return  fallback;
  }
}