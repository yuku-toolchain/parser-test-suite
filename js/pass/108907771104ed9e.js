let count = 0;
class Class {
  #method() {
    count += 1;
  }
  static isNameIn(value) {
    return (#method in value);
  }
}