var items = new Array("one", "two", "three");
var itemsRef = items;
items.push("four");
var itemsRef = items;
if (itemsRef.length !== 4) {}
var items = new Array("one", "two", "three");
var itemsRef = items;
items[1] = "duo";
if (itemsRef[1] !== "duo") {}