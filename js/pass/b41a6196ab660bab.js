let Child;
let parentCount = 0;
let childCount = 0;
class Parent {
  get #accessor() {
    parentCount += 1;
  }
  static init() {
    Child = class {
      get #accessor() {
        childCount += 1;
      }
      static isNameIn(value) {
        return (#accessor in value);
      }
    };
  }
}
Parent.init();