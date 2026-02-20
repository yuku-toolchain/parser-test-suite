const validCaseFirstOptions = ["upper", "lower", "false", false, {
  toString() {
    return false;
  }
}];
for (const caseFirst of validCaseFirstOptions) {
  const expected = String(caseFirst);
  let expect = "en-u-kf-" + expected;
  expect = "en-u-kf-" + expected;
}