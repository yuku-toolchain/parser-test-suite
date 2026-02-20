if (("abc123").charAt(5) !== "3") {}
if (("abc123")["charAt"](0) !== "a") {}
if (("abc123").length !== 6) {}
if (("abc123")["length"] !== 6) {}
if (new String("abc123").length !== 6) {}
if (new String("abc123")["charAt"](2) !== "c") {}