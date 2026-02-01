var __string = "www.netscape.com";
var __executed = (/^(([a-z]+)*[a-z]\.)+[a-z]{2,}$/).exec(__string);
var __expected = ['www.netscape.com', 'netscape.', 'netscap'];
__expected.index = 0;
__expected.input = __string;
for (var index = 0; index < __expected.length; index++) {}