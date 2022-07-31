<template>
  <div ref="projectContainer" class="project-container" v-loading="isLoading">
    <a
      v-for="item in data"
      :key="item.id"
      class="project-item"
      :href="item.url ? item.url : `javascript:alert('该项目未上线')`"
      :target="item.url ? '_blank' : '_self'"
    >
      <div class="left">
        <img v-lazy="item.thumb" alt="" />
      </div>
      <div class="right">
        <div class="title">
          <h2>{{ item.name }}</h2>
          <p class="github" v-if="item.github">GitHub: {{ item.github }}</p>
        </div>
        <div class="description">
          <p v-for="(de, i) in item.description" :key="i">{{ de }}</p>
        </div>
      </div>
    </a>
    <Empty v-if="data.length === 0 && !isLoading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll";
import Empty from "@/components/Empty";
export default {
  mixins: [mainScroll("projectContainer")],
  computed: {
    ...mapState("project", ["data", "isLoading"]),
  },
  created() {
    this.$store.dispatch("project/remoteData");
  },
  components: {
    Empty,
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/variable.less";

.project-container {
  height: 100%;
  padding: 0 20px;
  overflow-y: auto;
  color: @words;
  position: relative;

  .project-item {
    height: 230px;
    background: #f4f6f6;
    display: flex;
    padding: 15px;
    overflow: hidden;
    transition: 0.25s;
    border-radius: 5px;
    margin: 20px 0;
    cursor: pointer;

    &:hover {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
      transform: translateY(-5px);
      color: inherit;
    }

    .left {
      width: 250px;
      height: 100%;
      overflow: hidden;
      object-fit: cover;
      border-radius: 5px;
      margin-right: 15px;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .right {
      .title {
        margin-bottom: 15px;
        line-height: 2em;

        .github {
          color: @primary;
        }
      }
      .description {
        line-height: 1.5em;
      }
    }
  }
}
</style>  