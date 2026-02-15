var x = [];
x.length = 4294967295;
try {
  x = [];
  x.length = 4294967296;
} catch (e) {}