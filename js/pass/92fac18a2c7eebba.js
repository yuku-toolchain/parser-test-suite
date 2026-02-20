class FakeRegExp extends RegExp {
  exec(subject) {
    const fakeResult = ["ab", "a"];
    fakeResult.index = 0;
    return fakeResult;
  }
}
const re = new FakeRegExp();
const result = re.exec("ab");
Array.prototype.groups = {
  a: "b"
};
Object.getPrototypeOf(Array.prototype.groups).b = "c";
Array.prototype.groups = undefined;