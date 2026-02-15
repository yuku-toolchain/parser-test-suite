class C extends class {} {
  #field;
  constructor() {
    var init = () => super();
    var object = {
      get a() {
        init();
      }
    };
    ({a: this.#field} = object);
  }
}