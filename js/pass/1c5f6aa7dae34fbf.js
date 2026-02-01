class C {
  #field;
  m() {
    ({a: this.#field} = {
      a: 0
    });
  }
}