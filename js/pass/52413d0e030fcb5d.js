class C {
  static #f() {}
  static assert(expected) {
    assertToStringOrNativeFunction(this.#f, expected);
  }
}
C.assert("#f  (  )  {  }");