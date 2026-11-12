import { createOpenAI } from "@ai-sdk/openai";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { PORTFOLIO_CONTENT } from "@/lib/portfolio";

const SYSTEM = `You are a warm, concise guide on Innocentia Bulenda's personal website. Answer visitors' questions about her background and work using ONLY the portfolio content below. Speak about her in the third person. If something isn't covered, say so kindly and suggest reaching out via the "Let's Connect" section. Never invent facts. Keep answers under 120 words.

PORTFOLIO CONTENT:
${PORTFOLIO_CONTENT}`;

export const Route = createFileRoute("/api/ask")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: unknown };
        if (!Array.isArray(messages) || messages.length > 40) {
          return new Response("Invalid messages", { status: 400 });
        }
        const key = process.env["LOVABLE_API_KEY"];
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const lovable = createOpenAI({
          baseURL: "https://ai.gateway.lovable.dev/v1",
          apiKey: key,
          headers: { "Lovable-API-Key": key, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
        });

        const result = streamText({
          model: lovable.responses("openai/gpt-6-astra"),
          system: SYSTEM,
          messages: await convertToModelMessages(messages as UIMessage[]),
          abortSignal: request.signal,
          providerOptions: {
            openai: {
              forceReasoning: true,
              reasoningEffort: "low",
              store: false,
              include: ["reasoning.encrypted_content"],
            },
          },
        });

        return result.toUIMessageStreamResponse({ originalMessages: messages as UIMessage[] });
      },
    },
  },
});
