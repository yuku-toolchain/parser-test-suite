if (("Hello, WoRlD!").toLocaleLowerCase() !== "hello, world!") {}
if (("Hello, WoRlD!").toLocaleLowerCase() !== String("hello, world!")) {}
if (("Hello, WoRlD!").toLocaleLowerCase() === new String("hello, world!")) {}