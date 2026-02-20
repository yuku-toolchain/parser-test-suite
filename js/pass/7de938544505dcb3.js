for (const notation of [undefined, "standard", "scientific", "engineering"]) {
  const options = new Intl.NumberFormat([], {
    notation,
    compactDisplay: "long"
  }).resolvedOptions();
}
const options = new Intl.NumberFormat([], {
  notation: "compact",
  compactDisplay: "long"
}).resolvedOptions();