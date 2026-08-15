import fs from "node:fs";
const data = JSON.parse(fs.readFileSync(new URL("../data/pricing.json", import.meta.url), "utf8"));
if (!data.schemaVersion || !Array.isArray(data.entries)) throw new Error("Invalid pricing registry");
for (const row of data.entries) {
  if (!row.modelId || !row.status || !row.reviewed) throw new Error(`Incomplete pricing row: ${JSON.stringify(row)}`);
}
console.log(`Pricing registry valid: ${data.entries.length} entries; last review ${data.lastRegistryReview}`);
