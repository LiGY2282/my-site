// 导入vue
import Vue from "vue";
// 导入vue插件
import VueRouter from "vue-router";

// 导入路由配置
import routes from "./routes.js";

// 调用静态方法use使用我们的插件
Vue.use(VueRouter);

// 配置router对象
const router = new VueRouter({
  routes,
  mode: "history"
})

// 导出配置对象
export default router;