var u8 = new Uint8Array(3);
for (var invalid of ["#", "a#", "aa#", "aaa#"]) {
  for (var lastChunkHandling of ["loose", "strict", "stop-before-partial"]) {}
}
for (var valid of ["aaaa#", "aaaaa#", "aaaaaa#", "aaaaaaa#", "aaaaaaaa#"]) {
  for (var lastChunkHandling of ["loose", "strict", "stop-before-partial"]) {
    u8.fill(0);
    var result = u8.setFromBase64(valid, {
      lastChunkHandling
    });
  }
}