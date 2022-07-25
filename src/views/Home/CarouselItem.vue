<template>
  <div
    ref="container"
    @transitionend="stopBubble"
    class="carousel-item-container"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseleave"
  >
    <div class="imgWrap" ref="inner" :style="{ left: pos.left, top: pos.top }">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="handleLoad"
      />
    </div>
    <div ref="title" class="text title">{{ carousel.title }}</div>
    <div ref="desc" class="text description">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";

export default {
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null,
      innerSize: null,
      exceedSize: null,
      mouseX: 0,
      mouseY: 0,
      containerRect: null,
    };
  },
  components: {
    ImageLoader,
  },
  props: ["carousel"],
  methods: {
    // 阻止transitionend冒泡
    stopBubble(e) {
      e.stopPropagation();
    },

    // 显示文本
    showText() {
      this.$refs.title.style.transition = "width 1s";
      this.$refs.desc.style.transition = "width 2s 1s";
      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.desc.style.width = this.descWidth + "px";
    },

    // 隐藏文本
    hiddenText() {
      this.$refs.title.style.transition = "";
      this.$refs.desc.style.transition = "";
      this.$refs.title.style.width = 0;
      this.$refs.desc.style.width = 0;
    },

    // 图片加载完成后再抛出一次load事件
    handleLoad() {
      this.$emit("load");
    },

    calculSize() {
      // 记录外层容器尺寸
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };

      //记录内部图片容器尺寸
      this.innerSize = {
        width: this.$refs.inner.clientWidth,
        height: this.$refs.inner.clientHeight,
      };

      // 记录内部图片容器的几何尺寸
      this.containerRect = this.$refs.container.getBoundingClientRect();

      // 记录内部图片容器超出的尺寸
      this.exceedSize = {
        x: this.$refs.inner.clientWidth - this.$refs.container.clientWidth,
        y: this.$refs.inner.clientHeight - this.$refs.container.clientHeight,
      };
    },

    // 处理鼠标移动事件
    handleMousemove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },

    // 鼠标移出容器将图片居中
    handleMouseleave() {
      this.mouseX = this.$refs.container.clientWidth / 2;
      this.mouseY = this.$refs.container.clientHeight / 2;
    },
  },
  mounted() {
    // 记录文本宽高
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;

    // 获取完宽高之后，切换显示方式
    this.$refs.title.style.opacity = 1;
    this.$refs.desc.style.opacity = 1;
    this.hiddenText();

    // 计算出需要的值
    this.calculSize();

    // 保证在调整页面之后的值是正确的
    window.addEventListener("resize", this.calculSize);

    this.mouseX = this.$refs.container.clientWidth / 2;
    this.mouseY = this.$refs.container.clientHeight / 2;
  },

  // 组件销毁不需要这个事件
  destroyed() {
    window.removeEventListener("resize", this.calculSize);
  },

  // 计算属性
  computed: {
    pos() {
      if (!this.exceedSize) {
        return {};
      }
      return {
        left:
          -(this.exceedSize.x / this.containerSize.width) * this.mouseX + "px",
        top:
          -(this.exceedSize.y / this.containerSize.height) * this.mouseY + "px",
      };
    },
  },
};
</script>



<style scoped lang="less">
@import "~@/styles/variable.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .imgWrap {
    position: absolute;
    z-index: -1;
    width: 110%;
    height: 110%;
    transition: 0.3s linear;
  }

  .text {
    color: lighten(@gray, 20%);
    text-shadow: 0 0 1px rgba(0, 0, 0, 1);
    position: absolute;
    letter-spacing: 3px;
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;

    &.title {
      left: 5%;
      top: 70%;
      font-size: 30px;
    }

    &.description {
      left: 8%;
      top: 80%;
      font-size: 20px;
    }
  }
}
</style>