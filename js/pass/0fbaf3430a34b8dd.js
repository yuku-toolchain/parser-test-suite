function __func() {
  arguments[0]["PI"] = 3.14;
}
var __obj = {};
__func(__obj);
if (__obj.PI !== 3.14) {}