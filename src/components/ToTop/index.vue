<template>
  <div v-show="show" @click="handleClick" class="totop-container">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleScroll(dom) {
        if (!dom) {
            this.show = false;
            return;
        }   
        this.show = dom.scrollTop >= 1000;
    },
    handleClick() {
      this.eventBus.$emit("toTop", 0);
    }
  },
  created() {
    this.eventBus.$on("mainScroll", this.handleScroll)
  },
  destroyed() {
    this.eventBus.$off("mainScroll", this.handleScroll)
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/variable.less";
.totop-container {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: @primary;
  position: fixed;
  right: 50px;
  bottom: 40px;
  z-index: 999;
  border-radius: 50%;
  color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  user-select: none;
}
</style>