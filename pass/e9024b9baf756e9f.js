var dateObj = new Date(0);
dateObj.value = "DateValue";
var newObj = Object.create({}, {
  prop: dateObj
});