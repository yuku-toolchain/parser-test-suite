const validOptions = [[undefined, "long"], ["long", "long"], ["short", "short"], ["narrow", "narrow"], [{
  toString() {
    return "narrow";
  }
}, "narrow"]];
for (const [validOption, expected] of validOptions) {
  const tf = new Intl.RelativeTimeFormat([], {
    "style": validOption
  });
  const resolvedOptions = tf.resolvedOptions();
}