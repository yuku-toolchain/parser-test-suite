function __func(__arg) {
  __arg.foo = "whiskey gogo";
}
var __obj = {};
__func(__obj);
if (__obj.foo !== "whiskey gogo") {}