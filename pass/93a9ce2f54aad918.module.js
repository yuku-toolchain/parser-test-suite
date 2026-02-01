class TrojanBase {
  constructor(obj) {
    return obj;
  }
}
class ClassWithPrivateField extends TrojanBase {
  #val;
  constructor(obj) {
    super(obj);
    this.#val = 42;
  }
  static val(obj) {
    return obj.#val;
  }
}
const t = new ClassWithPrivateField({});
class ClassWithPrivateMethod extends TrojanBase {
  constructor(obj) {
    super(obj);
  }
  #privateMethod() {
    return 42;
  }
  static val(obj) {
    return obj.#privateMethod();
  }
}
const m = new ClassWithPrivateMethod({});
class ClassWithPrivateAccessor extends TrojanBase {
  constructor(obj) {
    super(obj);
  }
  get #privateAccessor() {
    return 42;
  }
  static val(obj) {
    return obj.#privateAccessor;
  }
}
const a = new ClassWithPrivateAccessor({});