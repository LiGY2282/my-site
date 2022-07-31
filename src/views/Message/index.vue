<template>
  <div class="message-container" ref="messageContainer">
    <MessageForm @submit="handleSubmit" :isListLoading="isLoading" :list="data.rows" title="留言板" :loadingTxt="loadingTxt" :subTitle="`(${data.total})`" />
  </div>
</template>

<script>
import MessageForm from "@/components/MessageForm";
import mainScroll from "@/mixins/mainScroll";
import remoteData from "@/mixins/remoteData";
import fetchMore from "@/mixins/fetchMore";
import * as api from "@/api/message";
export default {
  mixins: [
    remoteData({total: 0}),
    mainScroll("messageContainer"),
    fetchMore(api.getMessages),
  ],
  components: {
    MessageForm,
  },
  methods: {
    getRemoteData() {
      return api.getMessages(this.page, this.limit);
    },
    async handleSubmit(data, callback) {
      const resp = await api.postMessage(data);
      console.log(resp);
      this.data.rows.unshift(resp);
      this.data.total++;
      callback();
    }
  },
};
</script>


<style lang="less" scoped>
.message-container {
  height: 100%;
  padding: 20px;
  position: relative;
  overflow-y: auto;

  .message-form-container {
    width: 90%;
    margin: 0 auto;
  }
}
</style>