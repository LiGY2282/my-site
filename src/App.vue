<template>
  <div>
    <h1>App组件</h1>
    <Pager :total="300" />
  </div>
</template>

<script>
import Pager from "./components/Pager";

export default {
  components: {
    Pager,
  },
};
</script>

<style scoped>
</style>