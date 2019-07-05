function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
const mockCallback = jest.fn();
// 可以设定返回值 可以设置一次的返回此 以下代码设定的是第一次返回10第二次返回20 之后都是返回40
mockCallback
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(20)
  .mockReturnValue(40);
forEach([0, 1], mockCallback);
it("判定循环次数", () => {
  // 此函数至少呗调用一次
  expect(mockCallback).toBeCalled();
  // 至少使用指定参数调用过一次
  expect(mockCallback).toBeCalledWith(1);
  // 最后一次调用函数一定是使用1
  expect(mockCallback).lastCalledWith(1);
  // 此模拟函数被调用了两次
  expect(mockCallback.mock.calls.length).toBe(2);

  // 第一次调用函数时的第一个参数是 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // 第二次调用函数时的第一个参数是 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  // 这个函数被实例化两次
  expect(mockCallback.mock.instances.length).toBe(2);
  // 在被调用两次后返回值都是40
  expect(mockCallback()).toBe(40);
  expect(mockCallback()).toBe(40);
  expect(mockCallback()).toBe(40);
  expect(mockCallback()).toBe(40);
});

// 也可以通过mockImplementation来将回调函数覆盖
it("判定回调函数值", () => {
  const mFn2 = jest
    .fn(cb => cb(null, false))
    .mockImplementationOnce(cb => cb(null, false))
    .mockImplementation(cb => cb(null, true));
  mFn2((err, val) => expect(val).toBeFalsy());
  mFn2((err, val) => expect(val).toBeTruthy());
  mFn2((err, val) => expect(val).toBeTruthy());
});
// 需要返回this的情况，有一个语法糖的API以.mockReturnThis()函数，位于所有模拟器上：
it("判定this值", () => {
  const obj = {
    returnThis: jest
      .fn()
      .mockReturnThis()
      .mockName("这是简化的返回this的函数"),
    returnThis2: jest.fn(function() {
      return this;
    })
  };
  expect(obj.returnThis() === obj).toBeTruthy();
  expect(obj.returnThis2() === obj).toBeTruthy();
});
