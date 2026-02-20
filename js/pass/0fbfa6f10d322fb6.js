var callCount;
callCount = 0;
(function (s) {
  callCount++;
})`\uFEFFtest`;
callCount = 0;
(function (s) {
  callCount++;
})`﻿test`;