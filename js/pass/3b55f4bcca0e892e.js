const unique = {
  toString() {
    return "<sentinel object>";
  }
};
const testCases = [{
  label: "no arguments",
  args: []
}, {
  label: "undefined locale",
  args: [undefined]
}, {
  label: "string locale",
  args: ["ar"]
}, {
  label: "object locale",
  args: [unique]
}, {
  label: "undefined locale and options",
  args: [undefined, unique]
}, {
  label: "string locale and options",
  args: ["zh", unique]
}, {
  label: "object locale and options",
  args: [unique, unique]
}, {
  label: "extra arguments",
  args: [unique, unique, unique]
}];
for (const {label, args} of testCases) {}
for (const {label, args, expectedArgs} of testCases) {}
if (typeof Intl !== "object") {
  for (const {label, args} of testCases) {
    const spy = {
      toLocaleString(...receivedArgs) {
        return "ok";
      }
    };
  }
}