import Mock from "mockjs";
Mock.mock("/api/project", "get", {
    code: 0,
    msg: "",
    "data|10": [
        {
            id: "@guid",
            name: "个人博客系统",
            "url|1": ["@url", null],
            "github|1": ["@url", null],
            "description|1-4": ["@csentence(10, 50)"],
            thumb: "@image(250x250, @color, #fff, hello)",
            order: 1
        }
    ]
})