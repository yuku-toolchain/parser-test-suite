var o1 = {};
var result = Reflect.set(o1, 'p', 42);
var desc = Object.getOwnPropertyDescriptor(o1, 'p');
var o2 = {};
var receiver = {};
result = Reflect.set(o2, 'p', 43, receiver);
desc = Object.getOwnPropertyDescriptor(o2, 'p');
desc = Object.getOwnPropertyDescriptor(receiver, 'p');