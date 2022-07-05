<template>
  <div>
    <Pager :current="current" :total="total" @changePager="handPagerChanger" />
  </div>
</template>

<script>
import Pager from "./";
export default {
  name: "App",
  data() {
    return {
      current: 1,
      total: 301
    }
  },
  components: {
    Pager
  },
  methods: {
    handPagerChanger(newPager) {
      this.current = newPager;
      console.log(`加载第${newPager}页的数据`);
    }
  }
};

</script>

<style scoped>
 </style>