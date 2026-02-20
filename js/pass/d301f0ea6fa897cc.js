class C {
  #field;
  m() {
    var object = {
      get a() {}
    };
    ({a: this.#field} = object);
  }
}