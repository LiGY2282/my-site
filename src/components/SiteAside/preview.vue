<template>
  <div class="preview-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./";
export default {
    components: {
        SiteAside
    }
}
</script>

<style>
*{
    margin: 0;
}

.preview-container{
    width: 250px;
    height: 100vh;
}

</style>