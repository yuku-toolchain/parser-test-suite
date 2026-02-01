let count = 0;
class Class {
  get #accessor() {
    count += 1;
  }
  static isNameIn(value) {
    return (#accessor in value);
  }
}