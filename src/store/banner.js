import { getBanner } from "@/api/banner"
export default {
    namespaced: true,
    state: {
        isLoading: false,
        data: [],
    },
    mutations: {
        setIsLoading(state, payload) {
            state.isLoading = payload
        },
        setBanner(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async remoteBanner(ctx, payload) {
            if (ctx.state.data.length) {
                return;
            }
            ctx.commit("setIsLoading", true);
            const resp = await getBanner();
            ctx.commit("setBanner", resp);
            ctx.commit("setIsLoading", false);
        }
    }
}