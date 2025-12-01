import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { convertTexDelimiters } from "../utilities/convertTexDelimiters";

/**
 * Markdown component
 * --------------------
 *
 * Applies markdown styling to input string.
 *
 * @param {string} text - String with markdown formatting
 */
export function Markdown({ text }: { text: string }) {
  return (
    <div className="text-justify leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {convertTexDelimiters(text)}
      </ReactMarkdown>
    </div>
  );
}
