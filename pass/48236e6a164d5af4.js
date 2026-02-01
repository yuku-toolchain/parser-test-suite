Object.defineProperties(Object.prototype, {
  "localeMatcher": {
    get() {
      throw new Error("Should not call localeMatcher getter");
    }
  }
});