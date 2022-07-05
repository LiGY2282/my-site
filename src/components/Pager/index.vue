<template>
  <div class="pager-container" v-if="pagerNumber > 1">
    <a @click="handClick(1)" :class="{ disabled: current === 1 }">首页</a>
    <a @click="handClick(current - 1)" :class="{ disabled: current === 1 }"
      >上一页</a
    >

    <a
      @click="handClick(n)"
      v-for="(n, i) in nums"
      :key="i"
      :class="{ active: n === current }"
      class="numItem"
      >{{ n }}</a
    >

    <a
      @click="handClick(current + 1)"
      :class="{ disabled: current === pagerNumber }"
      >下一页</a
    >
    <a
      @click="handClick(pagerNumber)"
      :class="{ disabled: current === pagerNumber }"
      >尾页</a
    >
  </div>
</template>


<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visiableNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pagerNumber() {
      return Math.ceil(this.total / this.limit);
    },
    nums() {
      let arr = [];
      for (let i = this.numRange.min; i <= this.numRange.max; i++) {
        arr.push(i);
      }
      return arr;
    },
    numRange() {
      let min = Math.floor(this.current - this.visiableNumber / 2);
      if (min < 1) {
        min = 1;
      }

      let max = min + this.visiableNumber - 1;
      if (max >= this.pagerNumber) {
        max = this.pagerNumber;
        min = this.pagerNumber - this.visiableNumber + 1;
      }

      return { min, max };
    },
  },
  methods: {
    handClick(newPager) {
      if (newPager < 1) {
        newPager = 1;
      }
      if (newPager >= this.pagerNumber) {
        newPager = this.pagerNumber;
      }
      if (newPager === this.current) {
        return;
      }
      this.$emit("changePager", newPager);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/variable.less";

.pager-container {
  user-select: none;
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;

    &.numItem {
      width: 15px;
      text-align: center;
    }

    &.active {
      color: @words;
      cursor: default;
    }

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
  }
}
</style>
