function __func() {
  return arguments[0].name + " " + arguments[0].surname;
}
if (typeof __func !== "function") {}
if (__func({
  name: 'fox',
  surname: 'malder'
}) !== "fox malder") {}
function func__(arg) {
  return arg.name + " " + arg.surname;
}
if (typeof func__ !== "function") {}
if (func__({
  name: 'john',
  surname: 'lennon'
}) !== "john lennon") {}