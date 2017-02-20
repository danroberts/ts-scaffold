///<reference path="../typings/index.d.ts"/>
///<reference path="../src/add.ts"/>

describe("Add", function() {
  it("should add two numbers", function() {
    expect(add(1,2)).toBe(4);
  })
});
