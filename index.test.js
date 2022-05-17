const { expect } = require('expect');
const getAlgorithTestLink = require('./AlgorithmTest');
test('Testing number 1 ', () => {
  expect(getAlgorithTestLink(1)).toBe("number 1")
})

test('Testing number 2 ', () => {
  expect(getAlgorithTestLink(2)).toBe("number 2")
})