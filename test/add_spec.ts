import add from '../src/add';

describe("Add", function() {
  it("should add two numbers", function() {
    expect(add(1,2)).toBe(3);
  })
});
