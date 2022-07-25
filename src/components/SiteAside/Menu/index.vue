<template>
  <div class="menu-container">
    <RouterLink :exact="item.exact" active-class="selected" exact-active-class="" v-for="item in menuInfo" :key="item.url" :to="{name: item.name}" class="item">
      <div class="icon">
        <Icon :type="item.type" />
      </div>
      <span>{{item.text}}</span>
    </RouterLink>
  </div>
</template>

<script>
import "@/styles/global.less";
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      menuInfo: [
        {
            type: "home",
            text: "首页",
            name: "Home",
            exact: true
        },
        {
            type: "blog",
            text: "文章",
            name: "Blog",
            exact: false
        },
        {
            type: "info",
            text: "关于我",
            name: "About",
            exact: true
        },
        {
            type: "code",
            text: "项目&效果",
            name: "Project",
            exact: true
        },
        {
            type: "chat",
            text: "留言板",
            name: "Message",
            exact: true
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/variable.less";

.menu-container{
    margin: 24px 0;
}

.item {
  padding-left: 50px;
  display: flex;
  height: 40px;
  line-height: 40px;
  color: @lightWords;

  .icon {
    margin-right: 8px;
  }

  &:hover {
    color: #fff;
  }

  &.selected{
    background: #2d2d2d;
  }
}
</style>