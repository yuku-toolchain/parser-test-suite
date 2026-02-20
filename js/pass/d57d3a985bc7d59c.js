let caught = null;
class C {
  #field;
  constructor() {
    try {
      (#field in test262unresolvable);
    } catch (error) {
      caught = error;
    }
  }
}
new C();