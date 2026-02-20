var __executed = (/["'][^"']*["']/).exec('alice \u0022sweep\u0022: "don\'t"');
var __expected = ["\"sweep\""];
__expected.index = 6;
__expected.input = 'alice "sweep": "don\'t"';
for (var index = 0; index < __expected.length; index++) {}