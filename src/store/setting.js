import { getSetting } from "@/api/setting";
// 加载favicon
import { loadFavicon } from "@/utils";

export default {
    namespaced: true,
    state: {
        isLoading: false,
        data: null,
    },
    mutations: {
        setSetting(state, payload) {
            state.data = payload;
        },
        setIsLoading(state, payload) {
            state.isLoading = payload;
        }
    },
    actions: {
        async remoteSetting(ctx, payload) {
            ctx.commit("setIsLoading", true);
            const resp = await getSetting();
            ctx.commit("setSetting", resp);
            ctx.commit("setIsLoading", false);
            // loadFavicon(resp.favicon);
        }
    }
}