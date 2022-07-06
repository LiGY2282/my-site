<template>
    <div class="preview-container">
        <ImageLoader
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
            placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" 
            @load="handlerLoad"
            :duration="2000"
            />
    </div>
</template>

<script>
import ImageLoader from "./";
export default {
    components: {
        ImageLoader
    },
    methods: {
        handlerLoad() {
            console.log("组件内的事情已做完，全部加载完成");
        }
    }
}
</script>

<style>
.preview-container {
    width: 500px;
    height: 300px;
    border: 2px solid;
    margin: 0 auto;
}
</style>