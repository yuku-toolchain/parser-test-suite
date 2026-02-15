const expected = ["valueOf year"];
const actual = [];
const args = [{
  valueOf() {
    actual.push("valueOf year");
    return 1;
  }
}];