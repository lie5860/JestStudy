// Matchers（匹配器）
test("test 1 add 1 ", () => {
  // 相等匹配 具体的值的相等匹配
  expect(1 + 1).toBe(2);
});
test("test obj equal otherobj ", () => {
  // 相等匹配 对象比较器
  expect({ a: 1 }).toEqual({ a: 1 });
});

test("null", () => {
  // 真实性匹配
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  // 真实性匹配
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
test("two plus two", () => {
  // 数字型匹配
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
test("adding floating point numbers", () => {
  // 浮点数型匹配 避免细微的四舍五入引起额外的问题
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
test("there is no I in team", () => {
  // 字符型匹配 使用正则表达式匹配
  expect("team").not.toMatch(/I/);
});

test("the shopping list has beer on it", () => {
  // 数组类型匹配 检查是否包含
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "beer"
  ];
  expect(shoppingList).toContain("beer");
});

test("compiling android goes as expected", () => {
  // 异常匹配
  function compileAndroidCode() {
    throw new Error("you are using the wrong JDK");
  }
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // 可以通过校验错误信息来匹配
  expect(compileAndroidCode).toThrow("you are using the wrong JDK");
  expect(compileAndroidCode).toThrow(/JDK/);
});
