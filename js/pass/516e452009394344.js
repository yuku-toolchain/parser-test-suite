const values = [[undefined, "short"], ["short"], ["long"]];
for (const [value, expected = value] of values) {
  const callOrder = [];
  const nf = new Intl.NumberFormat([], {
    get notation() {
      callOrder.push("notation");
      return "compact";
    },
    get compactDisplay() {
      callOrder.push("compactDisplay");
      return value;
    }
  });
  const resolvedOptions = nf.resolvedOptions();
}