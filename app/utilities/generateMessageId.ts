/**
 * Generates a numeric unique ID based on system time (milliseconds).
 * Returns a Number (safe integer) with format: (timestampMillis * 1000) + sequence
 * Sequence increments for multiple calls in the same millisecond (0..999).
 */
export const generateMessageId = (() => {
  let lastTimestamp: number = 0;
  let sequence: number = 0;
  const SEQUENCE_MAX = 999; // allows up to 1000 unique IDs per millisecond

  return function generateMessageId(): number {
    const now = Date.now(); // milliseconds since epoch

    if (now === lastTimestamp) {
      sequence += 1;
      if (sequence > SEQUENCE_MAX) {
        // sequence overflow within same millisecond — wait for next millisecond
        // (this loop will spin for at most ~1ms in normal conditions)
        while (Date.now() === now) {
          /* spin */
        }
        // after advancing to next ms, recurse to compute id for the new ms
        return generateMessageId();
      }
    } else {
      lastTimestamp = now;
      sequence = 0;
    }

    const id = now * 1000 + sequence; // fits in Number safely for many years
    return id;
  };
})();
