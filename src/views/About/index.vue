<template>
  <div class="about-container" v-loading="isLoading || srcLoading">
    <iframe v-if="!isLoading" @load="srcLoading = false" class="iframe" :src="data" frameborder="0"></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoading: true,
    }
  },
  computed: {
    ...mapState("about", ["data", "isLoading"]),
  },
  created() {
    this.$store.dispatch("about/remoteData");
  },
  methods: {
    handleLoad() {
      console.log(123);
    }
  }
};
</script>

<style scoped lang="less">
.about-container {
  height: 100%;
  position: relative;
}
.iframe {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>