import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";

export default function AssistantMsg({ content }: { content: string }) {
  return (
    <div className="w-full">
      <div className="flex items-start">
        <div className="flex items-start bg-gradient-to-b from-[#f8f7f5] to-[#f6f6f2] rounded-lg p-2 gap-3 px-3 relative group max-w-full border border-white/50">
          <div className="markdown-content border-slate-400 rounded-lg overflow-hidden break-words text-slate-800">
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}
