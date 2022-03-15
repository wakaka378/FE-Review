/**
 * 节流  规定时间内只触发一次  如果重复触发  只生效一次
 *
 * @param {*} fn
 * @param {*} wait
 */
// function throttle(fn, wait = 500) {
//   // 定时器版本
//   /* let timer = null
//   return function (..args) {
//     if (!timer) {
//       timer = setTimeout(() => {
//         fn.apply(this, args)
//         timer = null
//       }, wait)
//     }
//   } */

//   // 时间戳版本
//   let time = Date.now();

//   // 对比两个时间是否超过wait时间
//   return function (...args) {
//     const isTimeOut = Date.now() - time >= wait;
//     if (isTimeOut) {
//       fn.apply(this, args);
//       time = Date.now();
//     }
//   };
// }

// /**
//  * 防抖 在规定时间后内执行 如果多次触发则重新计时
//  *
//  * @param {*} fn
//  * @param {number} [wait=500]
//  */
// function debounce(fn, wait = 500) {
//   let timer = null;

//   return function (...args) {
//     if (timer) {
//       clearTimeout(timer);
//       timer = null;
//     } else
//       [
//         (timer = setTimeout(() => {
//           fn.apply(this, args);
//         }, wait)),
//       ];
//   };
// }
console.log('----throttle');
