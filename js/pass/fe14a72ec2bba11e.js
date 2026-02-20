var __string = "1234567890";
if (__string.match(3)[0] !== "3") {}
if (__string.match(3).length !== 1) {}
if (__string.match(3).index !== 2) {}
if (__string.match(3).input !== __string) {}