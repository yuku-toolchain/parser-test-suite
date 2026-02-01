var __re = /\d+/;
var __matched = [];
var __expected = ["123", "123", "123", "123", "123", "123", "123", "123", "123", "123"];
do {
  var __executed = __re.exec("123 456 789");
  if (__executed !== null) {
    __matched.push(__executed[0]);
  } else {
    break;
  }
} while (__matched.length < 10);
for (var index = 0; index < __expected.length; index++) {}