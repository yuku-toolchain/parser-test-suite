class C {
  #f() {}
  assert(expected) {
    assertToStringOrNativeFunction(this.#f, expected);
  }
}
let c = new C();
c.assert("#f  (  )  {  }");