<template>
  <div class="not-found-container">
    <img :src="path" alt="" class="not-found" />
  </div>
</template>


<script>
import path from "@/assets/NotFound.png";

export default {
  data() {
    return {
      path,
    };
  },
  created() {
    console.log(path);
  },
};
</script>



<style scoped lang="less">
.not-found-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .not-found {
    width: 500px;
  }
}
</style>