// promise使用
// const promise1: Promise<unknown> = new Promise((resolve) => {
//   console.log('promise1');
//   // 模拟异步
//   setTimeout(() => {
//     console.log('promise ---> setTimeout');
//     resolve('promise1 resolve');
//   }, 1000);
// });

// promise1.then((res: string) => {
//   console.log(res);
// });

// interface MyPromiseInterface {
//   // 属性
//   value: string;
//   reason: string;

//   // 方法
//   resolve(): () => any;
//   reject(): () => any;
// }

// promise 状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this.value = null; // 成功之后的值
    this.reason = null; // 失败的原因
    this.status = PENDING; // 初始化状态
    this.onFulfilledCallbacks = []; // 存储成功的回调函数
    this.onRejectedCallbacks = []; // 存储失败的回调函数
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      console.log('buzhui');
      // 捕获异常抛出
      this.reject(error);
    }
    console.log(executor, '----executor');
  }

  // 用箭头函数就可以让this指向当前实例对象  避免promise在使用时  获取pormise的上下文作为构造函数的this  无法使用promise内部 value reason等变量
  resolve = (value) => {
    // 当前状态为 PENDDING时才可以
    if (this.status === PENDING) {
      this.status = FULFILLED; // 修改当前状态
      this.value = value; // 保存成功的值

      // 执行存储到回调  将失败结果返回
      while (this.onFulfilledCallbacks.length) {
        this.onFulfilledCallbacks.shift()(this.value);
      }
    }
  };

  reject = (reason) => {
    // 失败过程  PENDDING => REJECTED
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;

      // 执行存储到回调  将失败结果返回
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(this.reason);
      }
    }
  };
  // then 方法简单实现  链式调用
  // then(onFulfilled, onRejected) {
  //   // 根据当前状态  调用成功和失败函数  传递不同的值
  //   if (this.status === FULFILLED) {
  //     onFulfilled(this.value);
  //   }
  //   if (this.status === REJECTED) {
  //     onRejected(this.reason);
  //   }
  // }
  // p.then()  p.then()

  // then实现异步
  // then(onFulfilled, onRejected) {
  //   // 根据当前状态  调用成功和失败函数  传递不同的值
  //   if (this.status === FULFILLED) {
  //     onFulfilled(this.value);
  //   }
  //   if (this.status === REJECTED) {
  //     onRejected(this.reason);
  //   }

  //   // 当前状态为 PENDING 异步还没有结果  将回调存储到队列中
  //   if (this.status === PENDING) {
  //     this.onFulfilledCallbacks.push(onFulfilled);
  //     this.onRejectedCallbacks.push(onRejected);
  //   }
  // }

  // 优化异步链式调用 返回promise
  then(onFulfilled, onRejected) {
    // 根据当前状态  调用成功和失败函数  传递不同的值
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }

    // 当前状态为 PENDING 异步还没有结果  将回调存储到队列中
    if (this.status === PENDING) {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
  }
}

// 测试
// const p1 = new MyPromise((resolve, reject) => {
//   console.log('MyPromise');
//   resolve('resolve');
//   reject('reject');
// });
// p1.then(
//   (res) => {
//     console.log(res, '----p1 then resolve');
//   },
//   (reject) => {
//     console.log(reject, '------p1 then reject');
//   },
// );

// const p1 = new MyPromise((resolve, reject) => {
//   console.log('MyPromise');
//   throw new Error('throw Error');
//   // resolve('resolve');
//   // reject('reject');
// });
// p1.then(
//   (res) => {
//     console.log(res, '----p1 then resolve');
//   },
//   (reject) => {
//     console.log(reject, '------p1 then reject');
//   },
// );

// 测试异步
// const p1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('setTimeout');
//     resolve('setTimeout resolve');
//   }, 3000);
// });

// p1.then(
//   (res) => {
//     console.log(res, '------res');
//   },
//   (error) => {
//     console.log(error, '-----reject');
//   },
// );
console.log(1);
setTimeout(() => {
  console.log(2);
});
const p1 = new MyPromise((resolve) => {
  console.log(3);
  setTimeout(() => {
    resolve(4);
  });
});
p1.then((v) => console.log(v));
console.log(5);
