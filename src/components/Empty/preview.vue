<template>
  <div class="preview-container">
    <Empyt />
  </div>
</template>

<script>
import Empyt from "./";
export default {
  components: {
    Empyt,
  },
};
</script>

<style scoped>
.preview-container {
  margin: 0 auto;
  width: 500px;
  height: 300px;
  outline: 1px solid black;
  position: relative;
}
</style>