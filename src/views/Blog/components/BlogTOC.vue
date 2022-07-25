<template>
  <div class="blog-toc-container">
    <h1>目录</h1>
    <RightList @clicked="handleClicked" :list="tocWithSelected" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/utils";

export default {
  data() {
    return {
      active: "",
    };
  },
  components: {
    RightList,
  },
  props: {
    toc: {
      typeof: Array,
      require: true,
    },
  },
  computed: {
    tocWithSelected() {
      const getTOC = (toc) => {
        if (!toc) {
          return;
        }
        return toc.map((item) => ({
          selected: item.anchor === this.active,
          ...item,
          children: getTOC(item.children),
        }));
      };
      return getTOC(this.toc);
    },
    doms() {
      let doms = [];

      const addDom = (toc) => {
        for (const item of toc) {
          doms.push(document.getElementById(item.anchor));
          if (item.children) {
            addDom(item.children);
          }
        }
      };
      addDom(this.toc);
      return doms;
    },
  },
  methods: {
    handleClicked(data) {
      location.hash = data.anchor;
      this.active = data.anchor;
    },
    setSelected(dom) {
      if (!dom) {
        return;
      }
      // 先清空之前的选择
      this.active = "";

      // 在多少范围内选中
      const range = 200;

      // 循环所有的标题dom
      for (const item of this.doms) {
        // 得到标题距离视口的位置
        const top = item.getBoundingClientRect().top;

        if (top >= 0 && top <= range) {
          // 标题距离视口在规定范围内，选中。
          this.active = item.id;
          return;
        } else if (top > range) {
          // 标题在下方直接结束
          return;
        } else {
          // 不满足上面的判断证明标题在上方，先假设选中的是自己再进行下一次循环
          this.active = item.id;   
        }
      }
    },
  },
  created() {
    this.setSelectedDebounce = debounce(this.setSelected, 20);
    this.eventBus.$on("mainScroll", this.setSelectedDebounce);
  },
  destroyed() {
    this.eventBus.$off("mainScroll", this.setSelectedDebounce)
  },

};
</script>

<style scoped lang="less">
</style>