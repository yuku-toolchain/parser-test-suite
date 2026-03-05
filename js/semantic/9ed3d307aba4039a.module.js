function assertOnlyOwnProperties(object, props, message) {}
const replacements = [42, ["foo"], {
  foo: "bar"
}, "foo"];
for (const replacement of replacements) {
  let alreadyReplaced = false;
  let expectedKeys = ["0", "1", ""];
  if (typeof replacement === "object") {
    expectedKeys.splice(1, 0, ...Object.keys(replacement));
  }
  const o = JSON.parse("[1, 2]", function (k, v, {source}) {
    if (k === "0") {
      if (!alreadyReplaced) {
        this[1] = replacement;
        alreadyReplaced = true;
      }
    } else if (k !== "") {}
    return this[k];
  });
}
function assertOnlyOwnProperties(object, props, message) {}
for (const replacement of replacements) {
  let alreadyReplaced = false;
  let expectedKeys = ["p", "q", ""];
  if (typeof replacement === "object") {
    expectedKeys.splice(1, 0, ...Object.keys(replacement));
  }
  const o = JSON.parse('{"p":1, "q":2}', function (k, v, {source}) {
    if (k === 'p') {
      if (!alreadyReplaced) {
        this.q = replacement;
        alreadyReplaced = true;
      }
    } else if (k !== "") {}
    return this[k];
  });
  assertOnlyOwnProperties(o, ["p", "q"], `object forward-modified with ${replacement}`);
}
{
  let reviverCallIndex = 0;
  const expectedKeys = ["a", "b", "c", ""];
  const reviver = function (key, value, {source}) {
    if (key === "a") {
      this.b = 2;
    } else if (key === "b") {
      this.c = 3;
    } else if (key === "c") {}
    return value;
  };
  const parsed = JSON.parse('{"a": 0, "b": 1, "c": [1, 2]}', reviver);
  assertOnlyOwnProperties(parsed, ["a", "b", "c"], "object with forward-modified properties");
}
{
  let reviverCallIndex = 0;
  const expectedKeys = ["0", "1", "2", "3", ""];
  const reviver = function (key, value, {source}) {
    if (key === "0") {
      this[1] = 3;
    } else if (key === "1") {
      this[2] = 4;
    } else if (key === "2") {
      this[3] = 5;
    } else if (key === "5") {}
    return value;
  };
}