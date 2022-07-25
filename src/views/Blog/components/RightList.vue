<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span
        class="txt"
        @click="handleClick(item)"
        :class="{ active: item.selected }"
      >
        <span class="category">{{ item.name }}</span>
        <span class="aside" v-if="item.aside">{{ item.aside }}</span>
      </span>
      <RightList @clicked="handleClick" :list="item.children" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    // [{name: 名字, selected:是否选中, children: [{name: 文本, selected: 是否选中}]}]
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      // 重复点击无效
      if (item.selected) {
        return;
      }
      this.$emit("clicked", item);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/variable.less";

.right-list-container {
  list-style: none;
  padding: 0;
  color: darken(@lightWords, 10%);
  user-select: none;

  li {
    min-height: 40px;
    line-height: 40px;

    .right-list-container {
      padding-left: 1em;
    }

    .txt {
      cursor: pointer;

      &.active {
        color: #000;
        font-weight: 700;
        span.aside {
          color: #000;
        }
      }

      &:hover {
        color: #000;
        font-weight: 700;
        span.aside {
          color: #000;
          // font-weight: 700;
        }
      }

      span {
        margin-right: 8px;
        &.aside {
          font-size: 12px;
          color: @gray;
        }
      }
    }
  }
}
</style>