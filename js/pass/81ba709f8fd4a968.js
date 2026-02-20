if ("" == "" !== true) {}
if (" " == " " !== true) {}
if (" " == "" !== false) {}
if ("string" == "string" !== true) {}
if (" string" == "string " !== false) {}
if ("1.0" == "1" !== false) {}
if ("0xff" == "255" !== false) {}