import { GraphClient } from "./graphClient";
import { buildGroundedPrompt } from "./prompts";

async function main(): Promise<void> {
  const query = process.argv.slice(2).join(" ") || "What AI governance risks need attention?";
  const graph = new GraphClient();
  const documents = await graph.search(query);
  const prompt = buildGroundedPrompt(query, documents);

  console.log("Retrieved sources:");
  for (const doc of documents) {
    console.log(`- ${doc.source}: ${doc.title}`);
  }

  console.log("\nGenerated grounded prompt:\n");
  console.log(prompt);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

