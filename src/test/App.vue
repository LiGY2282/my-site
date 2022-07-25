<template>
<Demo @input="handle" />
</template>

<script>
import Demo from "./demo"
export default {
  components: {
    Demo,
  },
  methods: {
    handle(e) {
      console.log(e);
    }
  }
}
</script>

<style>

</style>