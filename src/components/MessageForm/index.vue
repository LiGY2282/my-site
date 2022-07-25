<template>
  <div class="message-form-contaienr">
    <TextArea v-on="$listeners" />
    <div class="title-wrapper">
      <h3>
        <span class="title">{{ title }}</span>
        <span class="subTitle">{{ subTitle }}</span>
      </h3>
    </div>
    <MessageList :list="list" />
    <div class="loading" v-loading="isListLoading">
      <span v-show="!isListLoading">{{loadingTxt}}</span>
    </div>
  </div>
</template>

<script>
import TextArea from "./TextArea";
import MessageList from "./MessageList";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
    loadingTxt: {
      type: String,
      default: "下滑加载更多",
    }
  },
  components: {
    TextArea,
    MessageList,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/variable.less";
.title-wrapper {
  margin-bottom: 20px;

  .title {
    margin-right: 5px;
  }
  .subTitle {
    font-size: 14px;
  }
}

.loading{
  position: relative;

  text-align: center;
  color: @gray;
  font-size: 12px;
}
</style>