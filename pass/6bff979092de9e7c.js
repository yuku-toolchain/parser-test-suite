if (("Hello, WoRlD!").toLowerCase() !== "hello, world!") {}
if (("Hello, WoRlD!").toLowerCase() !== String("hello, world!")) {}
if (("Hello, WoRlD!").toLowerCase() === new String("hello, world!")) {}