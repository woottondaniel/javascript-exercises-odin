const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld('Hello, World!')).toEqual('Hello, World!');
  });
});
