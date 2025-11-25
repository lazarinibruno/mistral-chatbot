import React, { ReactNode, type FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 *
 *
 * @param children -
 * @returns {JSX.Element}
 */
export function Markdown({ text }: { text: string }) {
  return (
    <div className="text-justify leading-relaxed">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
    </div>
  );
}
