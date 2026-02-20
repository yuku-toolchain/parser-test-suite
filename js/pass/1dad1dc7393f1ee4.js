class FakeRegExp extends RegExp {
  exec(subject) {
    const fakeResult = ["ab", "a"];
    fakeResult.index = 0;
    fakeResult.groups = {
      a: "b"
    };
    Object.getPrototypeOf(fakeResult.groups).b = "c";
    return fakeResult;
  }
}
const re = new FakeRegExp();
const result = re.exec("ab");