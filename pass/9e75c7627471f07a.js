var BLUE_NUM = 1;
var BLUE_STR = '1';
var YELLOW_NUM = 2;
var YELLOW_STR = '2';
var __color__map = {
  red: 0xff0000,
  BLUE_NUM: 0x0000ff,
  green: 0x00ff00,
  YELLOW_STR: 0xffff00
};
if (delete __color__map[YELLOW_NUM] !== true) {}
if (__color__map[YELLOW_STR] !== undefined) {}
if (delete __color__map[BLUE_STR] !== true) {}
if (__color__map[BLUE_NUM] !== undefined) {}