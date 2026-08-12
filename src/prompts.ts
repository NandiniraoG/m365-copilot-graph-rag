import type { GraphDocument } from "./graphClient";

export function buildGroundedPrompt(query: string, documents: GraphDocument[]): string {
  const context = documents
    .map((doc, index) => {
      return `[${index + 1}] ${doc.source.toUpperCase()} - ${doc.title}\n${doc.snippet}\n${doc.url}`;
    })
    .join("\n\n");

  return [
    "You are a Microsoft 365 Copilot-style assistant.",
    "Answer only from the supplied grounding context.",
    "Cite sources using bracket numbers.",
    "State when the context is insufficient.",
    "",
    `User question: ${query}`,
    "",
    "Grounding context:",
    context
  ].join("\n");
}

