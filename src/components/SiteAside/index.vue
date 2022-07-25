<template>
  <div class="site-aside-container">
    <Avatar
      url="https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__480.jpg"
      :size="150"
    />
    <Menu />
    <Contact />
    <p class="AQ">Lorem ipsum dolor</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
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

  .AQ{
    text-align: center;
    margin-top: 30px;
  }
}
</style>