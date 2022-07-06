<template>
  <div class="preview-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style scoped lang="less">

@import "~@/styles/global.less";
@import "~@/styles/variable.less";
.preview-container{
    width: 250px;
    margin: 100px auto;
    background: @dark;
}

</style>