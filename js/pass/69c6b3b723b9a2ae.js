let caught = null;
class C {
  #field;
  constructor() {
    try {
      (#field in ({}) << 0);
    } catch (error) {
      caught = error;
    }
  }
}
new C();