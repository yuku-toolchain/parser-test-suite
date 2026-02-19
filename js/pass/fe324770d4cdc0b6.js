var f = Function.call(mars, "return name;");
var mars = {
  name: "mars",
  color: "red",
  number: 4
};
var f = Function.call(mars, "this.godname=\"ares\"; return this.color;");
var about_mars = f();
if (this.godname !== "ares" && mars.godname === undefined) {}