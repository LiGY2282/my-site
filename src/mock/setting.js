import Mock from "mockjs";

Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://lgy-assets.oss-cn-shanghai.aliyuncs.com/img/night-1927265__480.jpg",
        siteTitle: "黑色蒲G英",
        github: "https://github.com/v-lgy",
        qq: "2243089982",
        qqQrCode: "https://lgy-assets.oss-cn-shanghai.aliyuncs.com/qq.jpg",
        weixin: "LiGY2282",
        weixinQrCode: "https://lgy-assets.oss-cn-shanghai.aliyuncs.com/weixin.jpg",
        mail: "v.lgy@qq.com",
        icp: "Null",
        githubName: "黑色蒲G英",
        favicon: "https://lgy-assets.oss-cn-shanghai.aliyuncs.com/img/2022073102564243.ico",
    }
})
