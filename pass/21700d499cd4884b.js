function assertIsRawJSON(rawJSON, expectedRawJSONValue) {}
assertIsRawJSON(JSON.rawJSON(1), "1");
assertIsRawJSON(JSON.rawJSON(null), "null");
assertIsRawJSON(JSON.rawJSON(true), "true");
assertIsRawJSON(JSON.rawJSON(false), "false");
assertIsRawJSON(JSON.rawJSON('"foo"'), '"foo"');