/**
 * Converts the tex delimiters from \(...\) / \[...\] to $...$ and $$...$$. Needed for remark-math.
 * 
 * (Function written by AI)
 * 
 * @param {string} md - Input text 
 * @returns The input text with the replaced delimiters.
 */
export function convertTexDelimiters(md: string) {
  if (!md) return md;

  const parts = md.split(/(```[\s\S]*?```|`[^`]*`)/g);

  return parts.map(part => {
    if (!part) return part;
    if (part.startsWith('```') || part.startsWith('`')) return part;

    // convert display math: \[ ... \]  -> $$\n ... \n$$
    part = part.replace(/\\\[((?:[\s\S]*?))\\\]/g, (_, body) => `$$\n${body}\n$$`);

    // convert inline math: \( ... \) -> $...$
    part = part.replace(/\\\(((?:[\s\S]*?))\\\)/g, (_, body) => `$${body}$`);

    return part;
  }).join('');
} 