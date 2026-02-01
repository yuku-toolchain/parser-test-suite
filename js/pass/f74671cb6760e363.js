class C {
  #field;
  m() {
    ({...this.#field} = {});
  }
}