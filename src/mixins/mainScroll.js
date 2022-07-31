export default function (refValue) {
    return {
        methods: {
            handleMainScroll() {
                this.eventBus.$emit("mainScroll", this.$refs[refValue]);
            },
            setMainScroll(value) {
                if (!this.$refs[refValue]) {
                    return;
                }
                this.$refs[refValue].scrollTop = value;
            }
        },
        mounted() {
            this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
            this.eventBus.$on("toTop", this.setMainScroll);
        },
        beforeDestroyed() {
            this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
            this.eventBus.$emit("mainScroll");
            this.eventBus.$off("toTop", this.setMainScroll);
        }
    }
}

