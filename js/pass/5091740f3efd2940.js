if (("Hello, WoRlD!").toLocaleUpperCase() !== "HELLO, WORLD!") {}
if (("Hello, WoRlD!").toLocaleUpperCase() !== String("HELLO, WORLD!")) {}
if (("Hello, WoRlD!").toLocaleUpperCase() === new String("HELLO, WORLD!")) {}