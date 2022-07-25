<template>
  <div v-loading="isLoading" ref="container" class="home-container">
    <ul
      class="carousel"
      :style="{ 'margin-top': marginTop }"
      @wheel="handleScroll"
      @transitionend="handleTransitionend"
    >
      <li v-for="item in this.data" :key="item.id">
        <CarouselItem ref="car" :carousel="item" @load="showFirstCarousel" />
      </li>
    </ul>
    <div class="icon iconUp" @click="switchTo(index - 1)" v-show="index > 0">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon iconDown"
      @click="switchTo(index + 1)"
      v-show="index < data.length - 1"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        @click="switchTo(i)"
        :class="{ active: i === index }"
        v-for="(item, i) in data"
        :key="item.id"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanner } from "@/api/banner";
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
import remoteData from "@/mixins/remoteData";

export default {
  mixins: [remoteData([])],
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      index: 0, // 当前显示的是第几项
      containerHeight: 0, // 容器高度
      isSwicting: false, // 是否正在切换
    };
  },
  // 挂载之后得到容器的宽度
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);

    // 挂在之后将isLoading改为false
  },
  computed: {
    // 计算出需要滚动的高度
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    getRemoteData() {
      return getBanner();
    },
    // 显示第一页轮播图的文字
    showFirstCarousel() {
      this.$refs.car[0].showText();
    },
    // 传入一个索引，切换到对应页面
    switchTo(i) {
      if (this.isSwicting) {
        return;
      }
      this.isSwicting = true;
      this.index = i;
    },

    // 处理滚轮事件
    handleScroll(e) {
      if (this.isSwicting) {
        return;
      }

      // 当滚动量大于5并且索引不超过界限时向下滚动；当滚动梁小于-5并且索引大于0时向上滚动
      if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.isSwicting = true;
        this.index++;
      } else if (e.deltaY < -5 && this.index > 0) {
        this.isSwicting = true;
        this.index--;
      }
    },

    // 切换动画结束后干什么
    handleTransitionend() {
      // 将是否正在切换改为false
      this.isSwicting = false;

      // 清除显示的文字
      this.$refs.car.forEach((item, i) => {
        if (i !== this.index) {
          item.hiddenText();
        }
      });
      // 显示当前页的文字
      this.$refs.car[this.index].showText();
    },

    // 窗口尺寸发生变化时，调整容器高度
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/variable.less";
@import "~@/styles/mix.less";

@gap: 10px;
@jump: 10px;
@duration: 2s;

.home-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  // width: 60%;
  // height: 40%;
  // border: 2px solid green;
  // overflow: visible;
  // margin: 100px auto;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    transition: 0.5s;
  }

  .icon {
    font-size: 30px;
    color: @gray;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;

    &.iconUp {
      top: @gap;
      animation: jumpUp @duration infinite;
    }
    &.iconDown {
      bottom: @gap;
      animation: jumpUp @duration infinite;
    }
  }

  .indicator {
    .self-pos-center();
    left: auto;
    transform: translateY(-50%);
    right: 20px;

    li {
      box-sizing: border-box;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      border: 1px solid #fff;
      margin-bottom: 10px;
      cursor: pointer;

      &.active {
        background: #fff;
      }
    }
  }

  .carousel {
    width: 100%;
    height: 100%;

    li {
      width: 100%;
      height: 100%;
    }
  }
}

@keyframes jumpUp {
  0% {
    transform: translateY(@jump);
  }
  50% {
    transform: translateY(-@jump);
  }
  100% {
    transform: translateY(@jump);
  }
}
@keyframes jumpDown {
  0% {
    transform: translateY(-@jump);
  }
  50% {
    transform: translateY(@jump);
  }
  100% {
    transform: translateY(-@jump);
  }
}
</style>