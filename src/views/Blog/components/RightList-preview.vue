<template>
  <RightList :list="data" @clicked="handleClicked" />
</template>

<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      data: [
        { name: "a", selected: false },
        {
          name: "b",
          selected: true,
          children: [
            { name: "b-1", selected: false },
            { name: "b-2", selected: false },
            {
              name: "b-3",
              selected: false,
              children: [
                { name: "b-3-1", selected: false },
                { name: "b-3-2", selected: true },
                { name: "b-3-3", selected: false },
              ],
            },
          ],
        },
        { name: "c", selected: false },
        { name: "d", selected: false },
      ],
    };
  },
  methods: {
    handleClicked(e) {
      console.log(e);
    }
  }
};
</script>

<style>
</style>