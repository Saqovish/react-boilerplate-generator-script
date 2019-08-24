const capitalize = require('../capitalize');

test('capitalize should return a capitalized word', () => {
    expect(capitalize("word")).toEqual("Word");
});