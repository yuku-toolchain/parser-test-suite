var obj = {
  the_property: true
};
var accum = "";
for (var prop in obj) {
  accum += prop;
}