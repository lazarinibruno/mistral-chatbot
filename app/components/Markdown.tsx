import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

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
        components={{
          p: ({ node, ...props }) => <p className="mb-2" {...props} />,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
