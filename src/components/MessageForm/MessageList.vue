<template>
  <ul class="message-list-container">
    <li v-for="item in list" :key="item.id" class="message-item">
      <div class="avatar">
        <Avatar :url="item.avatar" :size="44" />
      </div>
      <div class="right">
        <p class="username">{{ item.nickname }}</p>
        <p class="content">{{ item.content }}</p>
        <div class="time">{{ formatDate(item.createDate, true) }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
import { formatDate } from "@/utils";
export default {
  props: {
    list: {
      type: Array,
      require: true,
    },
  },
  components: {
    Avatar,
  },
  methods: {
    formatDate,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/variable.less";
.message-list-container {
  .message-item {
    display: flex;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
    margin: 20px 0;
  }

  .avatar {
    margin-right: 15px;
  }

  .username {
    margin-bottom: 5px;
    color: #2e405e;
    font-weight: bold;
    letter-spacing: 3px;
  }

  .content {
    font-size: 14px;
    color: @words;
  }

  .right {
    position: relative;
    flex-grow: 1;
    .time{
      position: absolute;
      top: 5px;
      right:0;
      color: @gray;
      font-size: 12px;
    }
  }
}
</style>