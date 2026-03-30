var await = 0;
var fromParam, fromBody;
class C {
  static {
    new (class {
      constructor(x = fromParam = await) {
        fromBody = await;
      }
    })();
  }
}