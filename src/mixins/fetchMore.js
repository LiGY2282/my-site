export default function (callback) {
    return {
        data() {
            return {
                page: 1,
                limit: 10,
                loadingTxt: "下滑加载更多",
            };
        },

        methods: {
            // 加载更多评论
            async fetchMore() {
                if (this.isLoading) {
                    return;
                }
                if (this.data.rows.length >= this.data.total) {
                    this.loadingTxt = "没有更多了";
                    return;
                }
                this.isLoading = true;
                this.page++;
                const resp = await callback(
                    this.page,
                    this.limit,
                    this.$route.params.id
                );
                this.data.rows = this.data.rows.concat(resp.rows);
                this.isLoading = false;
            },
            handleScroll(e) {
                if (!e) {
                    return;
                }

                // 判断是否滚动到最底部
                const range = 10;
                const between = Math.abs(e.scrollHeight - (e.scrollTop + e.clientHeight));
                if (between < range) {
                    this.fetchMore();
                }
            },
        },
        created() {
            this.eventBus.$on("mainScroll", this.handleScroll);
        },
        destroyed() {
            this.eventBus.$off("mainScroll", this.handleScroll);
        },
    }
}