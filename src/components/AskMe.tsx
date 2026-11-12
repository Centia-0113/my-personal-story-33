import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const SUGGESTIONS = [
  "What is her research about?",
  "What has she built?",
  "What is she working towards?",
];
const transport = new DefaultChatTransport({ api: "/api/ask" });

export function AskMe() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat({ transport });
  const busy = status === "submitted" || status === "streaming";
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages]);

  const ask = (text: string) => {
    const t = text.trim();
    if (!t || busy) return;
    sendMessage({ text: t });
    setInput("");
  };

  const last = messages[messages.length - 1];
  const waiting = busy && (!last || last.role === "user");

  return (
    <section id="ask" className="border-t border-border px-5 py-24 sm:px-10 lg:px-14 lg:py-32">
      <div className="mx-auto grid max-w-[80rem] gap-14 lg:grid-cols-[.55fr_1.45fr] lg:gap-24">
        <div>
          <p className="section-label">Ask</p>
          <div className="mt-8 h-px w-16 bg-accent" />
        </div>
        <div>
          <h2 className="font-display text-4xl leading-[1.1] sm:text-6xl">
            Curious? <span className="italic text-accent">Ask about me.</span>
          </h2>
          <p className="body-copy mt-6 max-w-xl">
            Ask anything about my background and work — answers are drawn from what I’ve shared
            here.
          </p>

          <div className="mt-10 border-t border-border pt-8">
            {messages.length > 0 && (
              <div className="mb-8 max-h-[28rem] space-y-6 overflow-y-auto pr-2">
                {messages.map((m) => {
                  const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
                  return m.role === "user" ? (
                    <p key={m.id} className="font-display text-2xl italic text-accent">
                      {text}
                    </p>
                  ) : (
                    <div key={m.id} className="body-copy prose-p:mb-3 max-w-2xl">
                      <ReactMarkdown>{text}</ReactMarkdown>
                    </div>
                  );
                })}
                {waiting && <p className="body-copy animate-pulse">Thinking…</p>}
                <div ref={endRef} />
              </div>
            )}
            {error && (
              <p className="mb-6 font-sans text-sm text-destructive">
                Sorry, I couldn’t answer just now. Please try again in a moment.
              </p>
            )}

            {messages.length === 0 && (
              <div className="mb-6 flex flex-wrap gap-3">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => ask(s)}
                    className="rounded-full border border-border px-4 py-2 font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="flex items-center gap-4 border-b border-border pb-3 focus-within:border-accent"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                aria-label="Ask a question about Innocentia"
                maxLength={500}
                className="flex-1 bg-transparent font-sans text-lg text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="font-sans text-xs uppercase tracking-[0.2em] text-accent disabled:opacity-40"
              >
                Ask
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
