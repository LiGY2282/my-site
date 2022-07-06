<template>
    <div class="image-loader-container">
        <img v-if="!done" class="placeholder" :src="placeholder">
        <img :src="src" :style="{ opacity: isLoaded, transition: duration + 'ms' }" @load="showSrcImg" @transitionend="everythingDone">
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            require: true
        },
        placeholder: {
            type: String,
            require: true
        },
        duration: {
            type: Number,
            default: 500
        }
    },
    data() {
        return {
            isLoaded: 0,
            done: false
        }
    },
    methods: {
        showSrcImg() {
            this.isLoaded = 1;
        },
        everythingDone() {
            this.done = true;
        }
    }
}
</script>

<style scoped lang="less">
.image-loader-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .placeholder{
        filter: blur(10px);
    }
}
</style>