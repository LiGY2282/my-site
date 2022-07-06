<template>
  <div class="imageLoader-container">
    <img
      :src="placeholder"
      alt=""
      class="placeholder animate__animated animate__fadeIn"
      :class="{ animate__fadeOut: isShow }"
      :style="{'--animate-duration': comDuration + 's'}"
    />
    <img
      @load="showImage($event)"
      :src="src"
      alt=""
      class="srcImg"
      v-show="isShow"
    />
  </div>
</template>

<script>
import "animate.css";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    src: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  methods: {
    showImage() {
        this.isShow = true;
        this.$emit("loader")
    },
  },
  computed: {
    comDuration() {
        return this.duration / 1000;
    }
  }
};
</script>

<style lang="less" scoped>
.imageLoader-container {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  img.placeholder {
    position: absolute;
    z-index: 9999;
  }
}
</style>