// Asynchronous(测试异步代码)

// 一、回调函数
test("the data is peanut butter", done => {
  // 如果 done 永远都不被调用，那么的测试将会失败，这也正是我们期望的（我们希望callback被调用，并且返回的data是我们期望的值）
  const fetchData = callback => {
    return callback("peanut butter");
  };
  function callback(data) {
    expect(data).toBe("peanut butter");
    done();
  }
  fetchData(callback);
});
// 二、Promise验证
test("the data is peanut butter", () => {
  // assertions（1）代表的是在当前的测试中至少有一个断言是被调用的，否则判定为失败。
  expect.assertions(1);
  const fetchData = () => Promise.resolve("peanut butter");
  // 以下三种都可以 通用、被承认（Jest20+）、不被承认（Jest20+）
  // return fetchData().then(data => {
  //   expect(data).toBe("peanut butter");
  // });
  return expect(fetchData()).resolves.toBe("peanut butter");
  // return expect(fetchData()).rejects.toMatch('error');
});
// 三、使用 Async/Await
test("the data is peanut butter", async () => {
  expect.assertions(1);
  const fetchData = () => Promise.resolve("peanut butter");
  const data = await fetchData();
  // 同二中可以写三种 通用、被承认、不被承认 这边仅写通用版
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);

  const fetchData = () => Promise.reject("error");
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});
