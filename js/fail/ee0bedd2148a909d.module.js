var await = 0;
var fromParam, fromBody;
class C {
  static {
    ({
      method(x = fromParam = await) {
        fromBody = await;
      }
    }).method();
  }
}