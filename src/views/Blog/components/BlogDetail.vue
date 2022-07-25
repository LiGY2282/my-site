<template>
  <div class="blog-detail-container">

    <!-- 标题 -->
    <h1>{{ blogData.title }}</h1>

    <!-- 文章的一些附加信息 -->
    <div class="aside">
      <span>日期：{{ formatDate(blogData.createDate) }}</span>
      <span>浏览：{{blogData.scanNumber}}</span>
      <a href="#comment">评论：{{blogData.commentNumber}}</a>
      <RouterLink :to="{
        name: 'BlogCategory',
        params: {
          categoryId: blogData.category.id
        }
      }">{{blogData.category.name}}</RouterLink>
    </div>

    <!-- 主体内容 -->
    <div class="content markdown-body" v-html="blogData.htmlContent"></div>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import formatDate from "@/utils/formatDate";
export default {
  props: {
    blogData: {
      type: Object,
      require: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/markdown.css";
@import "~@/styles/variable.less";
.aside{
  color: @gray;
  font-size: 12px;
  margin: 8px 0;
  *{  
    margin-right: 12px;
  }
}

.content{
  margin: 30px 0;
}
</style>