<template>
  <div class="Contact-container">
    <!-- 使用v-for指令根据info数组生成内容 -->
    <div class="item" v-for="(item, i) in info" :key="i">
      <a target="_self" :href="item.url">
        <Icon :type="item.type" />
        <span>{{ item.text }}</span>

        <div class="qrcode" v-if="item.qrcode">
          <img :src="item.qrcode" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import "@/styles/global.less";
import Icon from "@/components/Icon";

// 导入需要的图片
import qqPath from "@/assets/qq.jpg";
import weixinPath from "@/assets/weixin.jpg";

import { mapState } from "vuex";

export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState("setting", ["data"]),
    info() {
      return [
        {
          type: "github",
          text: this.data.githubName,
          url: this.data.github,
        },
        {
          type: "mail",
          text: this.data.mail,
          url: `mailto:${this.data.mail}`,
        },
        {
          type: "qq",
          text: this.data.qq,
          url: `tencent://message/?Menu=yes&uin=${this.data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9 e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`,
          qrcode: this.data.qqQrCode,
        },
        {
          type: "weixin",
          text: this.data.weixin,
          url: `#`,
          qrcode: this.data.weixinQrCode,
        },
      ];
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/variable.less";
@import "~@/styles/mix.less";

.Contact-container {
  background: transparent;
  padding: 10px 0;

  .iconfont {
    margin: 0 10px;
    font-size: 24px;
    vertical-align: -2px;
  }

  .item {
    height: 45px;
    line-height: 45px;

    a {
      cursor: pointer;
      color: @lightWords;
      font-size: 14px;

      position: relative;

      .qrcode {
        padding: 10px 15px 20px;
        background: #fff;
        position: absolute;
        bottom: 45px;
        left: 10px;
        border-radius: 5px;
        box-sizing: border-box;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        transform: scaleY(0);
        transition: 0.25s;
        transform-origin: center bottom;

        img {
          width: 140px;
          height: 140px;
          display: block;
        }

        &::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          background: #fff;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
        }
      }
    }
    a:hover {
      color: @primary;
      .qrcode {
        transform: scaleY(1);
      }
    }
  }
}
</style>