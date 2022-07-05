<template>
  <div class="empty-container">
    <div>
      <Icon type="empty" />
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/variable.less";
@import "~@/styles/mix.less";

.empty-container {
  width: 100%;
  height: 100%;
  color: @gray;
  .selef-flex-center();

  .icon-container {
    font-size: 50px;
  }

  p {
    margin: 0;
    text-align: center;
  }
}
</style>