if ("1" + undefined !== "1undefined") {}
if (undefined + "1" !== "undefined1") {}
if (new String("1") + undefined !== "1undefined") {}
if (undefined + new String("1") !== "undefined1") {}