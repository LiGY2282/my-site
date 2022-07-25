// const eventBus = {};
// /*
//     {
//         eventName1: [handler1, handler2, handler3],
//         eventName2: [handler1, handler2]
//     }
// */
// export default {
//     // 监听一个事件
//     $on(eventName, handler) {
//         if(!eventBus[eventName]) {
//             eventBus[eventName] = new Set();
//         }
//         eventBus[eventName].add(handler);
//     },
//     // 移出一个事件
//     $off(eventName, handler) {
//         if(!eventBus[eventName]) {
//             return;
//         }
//         eventBus[eventName].delete(handler);
//     },
//     // 触发一个事件
//     $emit(eventName, ...args) {
//         if(!eventBus[eventName]) {
//             return;
//         }
//         for(const item of eventBus[eventName]) {
//             item(...args);
//         }
//     }
// }

import Vue from "vue";
const eventBus = new Vue();
Vue.prototype.eventBus = eventBus;

export default eventBus;