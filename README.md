# mocha-cant
Alias for `it.skip()` to provide semantic meaning for tests that are currently broken.

### Example
```js
it.cant('Do this', function() {
  expect(true).to.be.false;
});
```
