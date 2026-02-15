for (var indexI = 0; indexI <= 65535; indexI++) {
  try {
    var xx = 0;
    eval("");
    var differs = xx !== 0;
  } catch (e) {}
  if (differs) {}
}