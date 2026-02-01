var __re = /(?:ab|cd)\d?/g;
__re.lastIndex = -1;
var __executed = __re.test("aacd22 ");
__re.lastIndex = -100;
__executed = __re.test("aacd22 ");