import Mock from "mockjs";
import qs from "qs";

// 提交评论
Mock.mock("/api/message", "post", {
    code: 0,
    msg: "",
    data: {
        id: "@guid",
        nickname: "@ctitle",
        content: "@csentence(20, 30)",
        createDate: Date.now(),
        avatar: "@image(250x250, @color, #fff, hello)",
    }
})


// // 获取评论
Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function (option) {
    const query = qs.parse(option.url)
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            total: 52,
            [`rows|${query.limit || 10}`]: [
                {
                    id: "@guid",
                    nickname: "@ctitle(5, 10)",
                    content: "@csentence(20, 50)",
                    createDate: Date.now(),
                    avatar: "@image(250x250, @color, #fff, hello)",
                }
            ]
        }
    })
})