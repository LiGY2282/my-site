import Mock from "mockjs";

Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__480.jpg",
        siteTitle: "我的个人空间",
        github: "https://gitee.com/v-lgy",
        qq: "2243089982",
        qqQrCode: "https://lgy-assets.oss-cn-shanghai.aliyuncs.com/qq.jpg",
        weixin: "LiGY2282",
        weixinQrCode: "https://lgy-assets.oss-cn-shanghai.aliyuncs.com/weixin.jpg",
        mail: "v.lgy@qq.com",
        icp: "Null",
        githubName: "黑色蒲G英",
        favicon: "Null",
    }
})
