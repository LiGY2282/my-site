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
import fetchMore from "@/mixins/fetchMore";
export default {
  mixins: [remoteData({ total: 0 }), fetchMore(getComments)],
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