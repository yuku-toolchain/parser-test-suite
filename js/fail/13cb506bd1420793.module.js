var await = 0;
var fromParam, fromBody;
class C {
  static {
    ({
      set accessor(x = fromParam = await) {
        fromBody = await;
      }
    }).accessor = undefined;
  }
}