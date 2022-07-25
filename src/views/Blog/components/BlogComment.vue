<template>
  <div class="blog-comment-container">
    <!-- 标题 -->
    <h2 id="comment">评论</h2>

    <!-- 评论列表 -->
    <MessageForm
      :list="data.rows"
      title="评论列表"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      @submit="handSubmit"
      :loadingTxt="loadingTxt"
    />
  </div>
</template>

<script>
import MessageForm from "@/components/MessageForm";
import remoteData from "@/mixins/remoteData";
import { getComments, postComment } from "@/api/blog";
export default {
  data() {
    return {
      page: 1,
      limit: 10,
      loadingTxt: "下滑加载更多",
    };
  },
  mixins: [remoteData({ total: 0 })],
  components: {
    MessageForm,
  },
  methods: {
    getRemoteData() {
      return getComments(this.page, this.limit, this.$route.params.id);
    },
    async handSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功");
    },
    // 加载更多评论
    async fetchMore() {
      if (this.isLoading) {
        return;
      }
      if (this.data.rows.length >= this.data.total) {
        this.loadingTxt = "没有更多评论了";
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await getComments(
        this.page,
        this.limit,
        this.$route.params.id
      );
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    handleScroll(e) {
      if(!e) {
        return;
      }
      
      // 判断是否滚动到最底部
      const range = 10;
      const between = Math.abs(e.scrollHeight - (e.scrollTop + e.clientHeight));
      if (between < range) {
        this.fetchMore();
      }
    },
  },
  created() {
    this.eventBus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.eventBus.$off("mainScroll", this.handleScroll);
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  #comment {
    padding: 30px 0;
    border-top: 1px solid #eee;
  }
}
</style>