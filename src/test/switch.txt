<template>
  <div ref="container" @click="handleClick" class="demo-container">
    <div :style="pos" ref="box" class="box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
    };
  },
  computed: {
    pos() {
      if (this.value) {
        return { left: "25px" };
      } else {
        return { left: "3px" };
      }
    },
  },
  methods: {
    handleClick() {
      this.value = !this.value;
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="less">
.demo-container {
  width: 50px;
  height: 25px;
  background: red;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: 0.25s;

  .box {
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.25s;
  }
}
</style>