<template>
  <div v-loading:list="isLoading" ref="blog" class="blog-list-container">
    <ul>
      <li v-for="item in data.rows" :key="item.id" class="blog-item">
        <!-- 左边的图片 -->
        <div v-if="item.thumb" class="cover-img">
          <RouterLink
            :to="{ name: 'BlogDetail', params: { id: item.id } }"
            href=""
          >
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>

        <!-- 右边主要内容 -->
        <div class="main-content">
          <!-- 标题 -->
          <RouterLink :to="{ name: 'BlogDetail', params: { id: item.id } }">
            <h2  class="title">{{ item.title }}</h2>
          </RouterLink>

          <!-- 文章信息 -->
          <p class="item-info">
            <span>日期: {{ formatDate(item.createDate) }}</span>
            <span>浏览: {{ item.scanNumber }}</span>
            <span>评论: {{ item.commentNumber }}</span>
            <span>{{ item.category.name }}</span>
          </p>

          <!-- 描述 -->
          <p class="desc">{{ item.description }}</p>
        </div>
      </li>
      <Pager
        @pageChange="handlePageChange"
        v-if="data.total"
        :current="routerInfo.page"
        :total="data.total"
        :limit="10"
      />
    </ul>
  </div>
</template>

<script>
import remoteData from "@/mixins/remoteData";
import { getBlog } from "@/api/blog";
import { formatDate } from "@/utils";
import Pager from "@/components/Pager";
import mainScroll from "@/mixins/mainScroll";
export default {
  mixins: [remoteData({}), mainScroll("blog")],
  methods: {
    // 给混合的remoteData提供获取远程数据的方法
    getRemoteData() {
      return getBlog(
        this.routerInfo.page,
        this.routerInfo.limit,
        this.routerInfo.categoryId
      );
    },
    formatDate,
    // 处理分页插件的点击事件
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routerInfo.limit,
      };

      // 当分类为-1时跳到Blog路由，否则跳到BlogCategory路由
      if (this.routerInfo.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId: this.routerInfo.categoryId,
          },
        });
      }
    },
  },
  computed: {
    // 获取路由信息，返回一个对象
    routerInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  components: {
    Pager,
  },
  watch: {
    // 监控路由变化
    async $route(newData, oldData) {
      this.isLoading = true;
      this.$refs.blog.scrollTop = 0;
      this.data = await this.getRemoteData();
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/global.less";

.blog-list-container {
  height: 100%;
  padding: 0 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: relative;

  ul {
    padding: 0 20px;
    border-radius: 5px;

    .blog-item {
      display: flex;
      box-sizing: border-box;
      border-bottom: 1px solid @gray;
      height: 180px;
      padding: 20px 0;

      .cover-img {
        width: 190px;
        height: 140px;
        flex: 0 0 auto;
        margin-right: 20px;
        overflow: hidden;
        border-radius: 5px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .main-content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .item-info {
          font-size: 12px;
          margin-bottom: 20px;
          color: @lightWords;
          span {
            margin-right: 8px;
          }
        }
        .desc {
          font-size: 14px;
        }
      }
    }
  }
}
</style>