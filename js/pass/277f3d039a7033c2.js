function replacer(k, v) {
  if (typeof v === "bigint") return "bigint"; else return v;
}