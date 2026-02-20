const unique = {
  toString() {
    return "<sentinel object>";
  }
};
const testCases = [{
  label: "no arguments",
  args: [],
  expectedArgs: [undefined, undefined]
}, {
  label: "undefined locale",
  args: [undefined],
  expectedArgs: [undefined, undefined]
}, {
  label: "string locale",
  args: ["ar"],
  expectedArgs: ["ar", undefined]
}, {
  label: "object locale",
  args: [unique],
  expectedArgs: [unique, undefined]
}, {
  label: "undefined locale and options",
  args: [undefined, unique],
  expectedArgs: [undefined, unique]
}, {
  label: "string locale and options",
  args: ["zh", unique],
  expectedArgs: ["zh", unique]
}, {
  label: "object locale and options",
  args: [unique, unique],
  expectedArgs: [unique, unique]
}, {
  label: "extra arguments",
  args: [unique, unique, unique],
  expectedArgs: [unique, unique]
}];
for (const {label, args, expectedArgs} of testCases) {}
for (const {label, args, expectedArgs} of testCases) {}
for (const {label, args, expectedArgs} of testCases) {
  const spy = {
    toLocaleString(...receivedArgs) {
      return "ok";
    }
  };
}