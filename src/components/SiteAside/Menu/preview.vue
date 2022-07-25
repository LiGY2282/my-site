<template>
  <div class="preview-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
export default {
  components: {
    Menu,
  },
};
</script>

<style>
.preview-container {
  margin: 0 auto;
  width: 300px;
  height: 600px;
  background: #000;
  box-sizing: border-box;
  overflow: hidden;
}
</style>