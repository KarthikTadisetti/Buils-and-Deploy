// index.test.js
const assert = require('assert');

describe('Sample Test', function() {
  it('should pass', function() {
    assert.strictEqual(1, 1); // This will pass
  });

  it('should fail', function() {
    assert.strictEqual(1, 2); // This will fail intentionally
  });
});
