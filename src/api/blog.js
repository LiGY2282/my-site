import request from "./request";

// 获取博客分类数据
export async function getBlongType() {
    return await request.get("/api/blongtype");
}

/**
 * 分页获取博客数据
 * @param {Number} page 当前页码
 * @param {Number} limit 每页显示多少条
 * @param {Number} categoryid 这条数据属于哪个分类，-1表示全部
 * @returns Promise
 */
export async function getBlog(page = 1, limit = 10, categoryid = -1) {
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid
        }
    })
}

// 获取单个博客
export async function getBlogSingBlog(id) {
    return await request.get(`/api/blog/${id}`)
}

// 提交评论
export async function postComment(commentInfo) {
    return await request.post("/api/comment", commentInfo);
}

// 分页获取评论
export async function getComments(page = 1, limit = 10, blogid = -1) {
    return await request.get("/api/comment", {
        params: {
            page,
            limit,
            blogid
        }
    })
}