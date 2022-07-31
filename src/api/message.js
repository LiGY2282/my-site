import request from "@/api/request";

// 提交评论
export async function postMessage(nickname, content) {
    return await request.post("/api/message", { nickname, content });
}

// 分页获取所有评论
export async function getMessages(page, limit) {
    return await request.get("/api/message", {
        params: {
            page,
            limit
        }
    })
}