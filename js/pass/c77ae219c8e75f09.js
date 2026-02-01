let c = new (class {
  #f() {}
  assert(expected) {
    assertToStringOrNativeFunction(this.#f, expected);
  }
})();
c.assert("#f  (  )  {  }");