if (true === new Boolean(true)) {}
if (true === 1) {}
if (true === new Number(true)) {}
if (true === "1") {}
if (true === new String(true)) {}
if (new Boolean(false) === false) {}
if (0 === false) {}
if (new Number(false) === false) {}
if ("0" === false) {}
if (false === new String(false)) {}
if (true === ({
  valueOf: function () {
    return true;
  }
})) {}