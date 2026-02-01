var caught;
function Parent() {}
class Child extends Parent {
  constructor() {
    super();
    try {
      super();
    } catch (err) {
      caught = err;
    }
  }
}
new Child();