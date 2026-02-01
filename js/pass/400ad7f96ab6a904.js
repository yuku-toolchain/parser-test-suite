var __executed = (/bc..[\d]*[\s]*/).exec('abcdef');
var __expected = ["bcde"];
__expected.index = 1;
__expected.input = 'abcdef';
for (var index = 0; index < __expected.length; index++) {}