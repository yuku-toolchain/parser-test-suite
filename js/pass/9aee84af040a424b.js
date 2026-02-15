if (0 != false !== false) {}
if ("1" != true !== false) {}
if (new Boolean(false) != false !== false) {}
if (({
  valueOf: function () {
    return "0";
  }
}) != false !== false) {}