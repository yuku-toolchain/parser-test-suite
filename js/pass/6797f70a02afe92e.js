if (("Hello, WoRlD!").toUpperCase() !== "HELLO, WORLD!") {}
if (("Hello, WoRlD!").toUpperCase() !== String("HELLO, WORLD!")) {}
if (("Hello, WoRlD!").toUpperCase() === new String("HELLO, WORLD!")) {}