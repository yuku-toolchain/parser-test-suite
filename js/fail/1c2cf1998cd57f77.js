try {
  class C {
    get [await 9]() {
      return 9;
    }
    set [await 9](v) {
      return 9;
    }
    static get [await 9]() {
      return 9;
    }
    static set [await 9](v) {
      return 9;
    }
  }
  let c = new C();
} catch (e) {}