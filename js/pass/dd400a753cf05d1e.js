var __re = /(?:ab|cd)\d?/g;
var __matched = [];
var __expected = ["ab", "cd2", "ab3", "cd"];
do {
  var __executed = __re.exec("ab  cd2  ab34  cd");
  if (__executed !== null) {
    __matched.push(__executed[0]);
  } else {
    break;
  }
} while (true);
for (var index = 0; index < __expected.length; index++) {}