let Child;
let parentCount = 0;
let childCount = 0;
class Parent {
  #method() {
    parentCount += 1;
  }
  static init() {
    Child = class {
      #method() {
        childCount += 1;
      }
      static isNameIn(value) {
        return (#method in value);
      }
    };
  }
}
Parent.init();