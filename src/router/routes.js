// 导入需要的组件
import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import Project from "@/views/Project";
import Detail from "@/views/Blog/Detail";

// 配置路由规则，每个路由的路径，每个路径对应什么样的组件
export default [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/about", component: About },
  { name: "Blog", path: "/blog", component: Blog },
  { name: "BlogCategory", path: "/blog/cate/:categoryId", component: Blog },
  { name: "BlogDetail", path: "/blog/:id", component: Detail},
  { name: "Message", path: "/message", component: Message },
  { name: "Project", path: "/project", component: Project },
];