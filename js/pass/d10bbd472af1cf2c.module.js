class NonExtensibleBase {
  constructor(seal) {
    if (seal) Object.preventExtensions(this);
  }
}
class ClassWithPrivateField extends NonExtensibleBase {
  #val;
  constructor(seal) {
    super(seal);
    this.#val = 42;
  }
  val() {
    return this.#val;
  }
}
const t = new ClassWithPrivateField(false);
class ClassWithPrivateMethod extends NonExtensibleBase {
  constructor(seal) {
    super(seal);
  }
  #privateMethod() {
    return 42;
  }
  publicMethod() {
    return this.#privateMethod();
  }
}
const m = new ClassWithPrivateMethod(false);
class ClassWithPrivateAccessor extends NonExtensibleBase {
  constructor(seal) {
    super(seal);
  }
  get #privateAccessor() {
    return 42;
  }
  get publicAccessor() {
    return this.#privateAccessor;
  }
}
const a = new ClassWithPrivateAccessor(false);
class TestNonExtensibleData {
  #g = (Object.preventExtensions(this), "Test262");
}