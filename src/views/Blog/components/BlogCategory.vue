<template>
  <div class="blog-category-container" v-loading:category="isLoading">
    <h2 v-if="!isLoading">文章分类</h2>
    <RightList @clicked="handleClicked" :list="list" />
  </div>
</template>

<script>
import remoteData from "@/mixins/remoteData";
import { getBlongType } from "@/api/blog";
import RightList from "./RightList.vue";
export default {
  mixins: [remoteData([])],
  methods: {
    // 为混合的remoteData提供获取远程数据的方法
    getRemoteData() {
      return getBlongType();
    },

    // 点击跳转
    handleClicked(data) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (data.id === -1) {
        this.$router.push({
          name: "Blog",
        });
      } else {
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId: data.id,
          },
        });
      }
    },
  },
  components: {
    RightList,
  },
  computed: {
    // 分类id
    categoryId() {
      return this.$route.params.categoryId || -1;
    },
    // 每页显示多少条
    limit() {
      return this.$route.query.limit || 10;
    },

    // 修改一下获取到的远程数据
    list() {
      // 没获取到远程数据的时候直接退出
      if(this.data.length === 0) {
        return;
      }
      // 加上“全部”这一项
      const result = [
        {
          name: "全部",
          articleCount: this.data.reduce((a, b) => a + b.articleCount, 0),
          id: -1,
        },
        ...this.data,
      ];

      // 返回结果
      return result.map((item) => {
        return {
          ...item,
          aside: item.articleCount + "篇",
          selected: this.categoryId == item.id,
        };
      });
    },
  },
};
</script>

<style scoped lang="less">
.blog-category-container {
  width: 300px;
  padding: 20px;
  height: 100%;
  position: relative;
  overflow-y: auto;

  h2 {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .right-list-container {
    font-size: 14px;
  }
}
</style>