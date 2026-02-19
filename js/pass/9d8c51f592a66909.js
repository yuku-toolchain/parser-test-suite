var thrown = new Test262Error();
var caught;
var sameBlock = false;
var subsequentField = false;
var subsequentBlock = false;
try {
  class C {
    static {
      throw thrown;
      sameBlock = true;
    }
    static x = subsequentField = true;
    static {
      subsequentBlock = true;
    }
  }
} catch (error) {
  caught = error;
}