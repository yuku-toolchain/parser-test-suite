let Child;
class Parent {
  #field;
  static init() {
    Child = class {
      #field;
      static isNameIn(value) {
        return (#field in value);
      }
    };
  }
}
Parent.init();