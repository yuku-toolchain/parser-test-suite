const expected = ["valueOf year", "valueOf month"];
const actual = [];
const args = [{
  valueOf() {
    actual.push("valueOf year");
    return 1;
  }
}, {
  valueOf() {
    actual.push("valueOf month");
    return 1;
  }
}];