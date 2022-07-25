<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail v-if="data.id" :blogData="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC v-if="data.id" :toc="data.toc" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import remoteData from "@/mixins/remoteData";
import { getBlogSingBlog } from "@/api/blog";
import BlogComment from "./components/BlogComment";
import mainScroll from "@/mixins/mainScroll";
export default {
  mixins: [remoteData({}), mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    getRemoteData() {
      return getBlogSingBlog(this.$route.params.id);
    },
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  padding: 20px;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.right-container {
  width: 300px;
  height: 100%;
  overflow-y: auto;
  position: relative;
  padding: 20px;
}
</style>