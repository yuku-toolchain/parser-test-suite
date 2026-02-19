try {
  intry__intry__var = intry__intry__var;
  intry__incatch__var = intry__incatch__var;
  incatch__intry__var = incatch__intry__var;
  incatch__incatch__var = incatch__incatch__var;
} catch (e) {}
try {
  try {
    var intry__intry__var;
  } catch (e) {
    var intry__incatch__var;
  }
} catch (e) {
  try {
    var incatch__intry__var;
  } catch (e) {
    var incatch__incatch__var;
  }
}