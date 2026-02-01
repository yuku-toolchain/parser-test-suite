var str = new String("abc");
str.value = "StrValue";
var newObj = Object.create({}, {
  prop: str
});