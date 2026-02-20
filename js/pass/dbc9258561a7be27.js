var u8 = new Uint8Array(0);
for (var string of ["#", "a#", "aa#", "aaa#", "aaaa#"]) {
  for (var lastChunkHandling of ["loose", "strict", "stop-before-partial"]) {
    var result = u8.setFromBase64(string, {
      lastChunkHandling
    });
  }
}