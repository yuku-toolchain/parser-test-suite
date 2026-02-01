var __str__obj = new String("shocking blue");
if (__str__obj["__custom__prop"] !== undefined) {}
String.prototype.__custom__prop = "bor";
if (__str__obj["__custom__prop"] !== "bor") {}