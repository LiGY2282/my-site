import {getProject} from "@/api/project";

export default {
    namespaced: true,
    state: {
        isLoading: false,
        data: [],
    },
    mutations: {
        setIsLoading(state, payload) {
            state.isLoading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async remoteData(ctx, payload) {
            if(ctx.state.data.length) {
                return;
            }
            ctx.commit("setIsLoading", true);
            const resp = await getProject();
            ctx.commit("setData", resp);
            ctx.commit("setIsLoading", false);
        }
    }
}