// import { start, done } from "nprogress";
// import "nprogress/nprogress.css"
// window.start = start;
// window.done = done;

// function delay(duration) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, duration);
//   })
// }

// async function asyncComp(getComp) {
//   console.log("开始");
//   start();
//   await delay(2000);
//   const resp = await getComp();
//   done();
//   console.log("结束");
//   return resp;
// }

import NotFond from "@/components/NotFound";

// 配置路由规则，每个路由的路径，每个路径对应什么样的组件
export default [
  { name: "Home", path: "/", component: () => import("@/views/Home") },
  { name: "About", path: "/about", component: () => import("@/views/About") },
  { name: "Blog", path: "/blog", component: () => import("@/views/Blog") },
  { name: "BlogCategory", path: "/blog/cate/:categoryId", component: () => import("@/views/Blog") },
  { name: "BlogDetail", path: "/blog/:id", component: () => import("@/views/Blog/Detail") },
  { name: "Message", path: "/message", component: () => import("@/views/Message") },
  { name: "Project", path: "/project", component: () => import("@/views/Project") },
  { name: "NotFond", path: "*", component: NotFond },
];