<template>
  <div class="w">
    <Icon v-for="(item, i) in classArr" :key="i" :type="item" />
  </div>
</template>

<script>
import Icon, { classMap } from "./";

export default {
  components: {
    Icon,
  },
  computed: {
    classArr() {
        return Object.keys(classMap);        
    }    
  }
};
</script>

<style scoped>
.icon-container{
    font-size: 30px;
}
</style>