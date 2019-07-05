// 全局函数
const obj = { a: 0 };
beforeAll(() => {
  return Promise.resolve((obj.a += 1)).then();
});
beforeEach(() => {
  return Promise.resolve().then(() => (obj.a += 1));
});
describe("测试快。将多个测试组合在一起", () => {
  test("测试beforeAll", () => expect(obj.a).toBe(2));
  test("测试beforeAll", () => expect(obj.a).toBe(3));

  // 可以值测试一个子集 跳过其他所有测试  test.only(name, fn, timeout)等同于 it.only(name, fn, timeout) or fit(name, fn, timeout)
  test.only("测试beforeAll", () => expect(obj.a).toBe(2));
  // test.skip(name, fn)等同于it.skip(name, fn) or xit(name, fn) or xtest(name, fn)
  test.skip("被跳过的测试", () => {});
});

// 第二个参数是等待时间 默认是5秒 单位是毫秒
afterEach(() => {}, 10000);
afterAll(() => {});
