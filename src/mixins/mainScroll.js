export default function (refValue) {
    return {
        methods: {
            handleScroll() {
                this.eventBus.$emit("mainScroll", this.$refs[refValue]);
            },
            setMainScroll(value) {
                if(!this.$refs[refValue]) {
                    return;
                }
                this.$refs[refValue].scrollTop = value;
            }
        },
        mounted() {
            this.$refs[refValue].addEventListener("scroll", this.handleScroll);
            this.eventBus.$on("toTop", this.setMainScroll);
        },
        beforeDestroyed() {
            this.$refs[refValue].removeEventListener("scroll", this.handleScroll);
            this.eventBus.$emit("mainScroll");
            this.eventBus.$off("toTop", this.setMainScroll);
        }
    }
}

