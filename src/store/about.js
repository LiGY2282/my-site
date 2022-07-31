import { getAbout } from "@/api/about";

export default {
    namespaced: true,
    state: {
        isLoading: false,
        data: null,
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        },
        setIsLoading(state, payload) {
            state.isLoading = payload;
        }
    },
    actions: {
        async remoteData(ctx, payload) {
            if(ctx.state.data) {
                return;
            }
            ctx.commit("setIsLoading", true);
            const resp = await getAbout();
            ctx.commit("setData", resp);
            ctx.commit("setIsLoading", false);
        }
    }
}