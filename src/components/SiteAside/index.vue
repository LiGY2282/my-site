<template>
  <div class="site-aside-container" v-loading="isLoading">
    <template v-if="data">
      <Avatar :url="data.avatar" :size="150" />
      <Menu />
      <Contact/>
      <p class="AQ">{{ data.icp }}</p>
    </template>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: {
    ...mapState("setting", ["data", "isLoading"]),
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mix.less";

.site-aside-container {
  width: 100%;
  height: 100%;
  background: #1e1e1e;
  padding: 20px 0;
  overflow-x: hidden;
  overflow-y: auto;

  .avatar-container {
    margin: 0 auto;
  }

  .AQ {
    text-align: center;
    margin-top: 30px;
  }
}
</style>