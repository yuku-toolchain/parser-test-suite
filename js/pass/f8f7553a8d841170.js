var chars = "𐒠";
if (chars.length !== 2) {}
if (chars.charCodeAt(0) !== 0xD801) {}
if (chars.charCodeAt(1) !== 0xDCA0) {}