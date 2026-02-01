if (true != 1 !== false) {}
if (false != "0" !== false) {}
if (true != new Boolean(true) !== false) {}
if (true != ({
  valueOf: function () {
    return 1;
  }
}) !== false) {}