<template>
  <form
    ref="formWrap"
    class="text-area-contaienr"
    @submit.prevent="handleSubmit"
    action=""
  >
    <div class="form-item username">
      <input
        class="txt"
        type="text"
        maxlength="10"
        placeholder="用户昵称"
        v-model="username"
      />
      <div class="txtLen">{{ username.length }}/10</div>
      <div class="err">{{ userErr }}</div>
    </div>
    <div class="form-item content">
      <textarea
        class="txt"
        name=""
        placeholder="输入内容"
        v-model="textContent"
        maxlength="300"
      ></textarea>
      <div class="txtLen">{{ textContent.length }}/300</div>
      <div class="err">{{ txtErr }}</div>
    </div>
    <button :disabled="isSubmiting" class="submit">
      {{ isSubmiting ? "提交中..." : "提交" }}
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      textContent: "",
      userErr: "",
      txtErr: "",
      isSubmiting: false,
    };
  },
  methods: {
    // 处理提交
    handleSubmit() {
      // 验证失败不进行后续操作
      if (!this.validator()) {
        return;
      }

      this.isSubmiting = true;

      // 抛出事件
      this.$emit(
        "submit",
        { nikename: this.username, content: this.textContent },
        (message) => {
          this.$showMessage({
            content: message,
            type: "success",
            container: this.$refs.formWrap,
            duration: 1000,
            callback: () => {
              this.isSubmiting = false;
              this.username = "";
              this.textContent = "";
            },
          });
        }
      );
    },
    // 验证表单
    validator() {
      let result = true;

      // 清空错误消息
      this.userErr = "";
      this.txtErr = "";

      // 判断昵称
      if (!this.username.trim()) {
        result = false;
        this.userErr = "请输入一个昵称";
      }

      // 判断评论内容
      if (!this.textContent.trim()) {
        result = false;
        this.txtErr = "请输入你要评论的内容";
      }

      // 返回结果
      return result;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/variable.less";
.text-area-contaienr {
  margin-bottom: 20px;
  .form-item {
    height: 35px;
    border-radius: 5px;
    color: @words;
    margin-bottom: 20px;
    position: relative;

    .err {
      font-size: 12px;
      color: @danger;
      position: absolute;
      bottom: -15px;
      left: 3px;
    }

    .txt {
      display: block;
      border-radius: 5px;
      border: 1px solid #ccc;
      outline: none;
      width: 100%;
      height: 100%;
      padding: 0 10px;

      &:focus {
        border-color: @primary;
      }
    }

    .txtLen {
      position: absolute;
      font-size: 12px;
      color: @gray;
      right: 3px;
    }

    &.username {
      width: 250px;
      position: relative;

      .txtLen {
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &.content {
      width: 100%;
      height: 150px;
      resize: none;

      .txtLen {
        bottom: 3px;
      }

      .txt {
        resize: none;
        padding: 10px;
        line-height: 1.3em;
      }
    }
  }

  .submit {
    background: @primary;
    height: 35px;
    border-radius: 5px;
    border: none;
    width: 100px;
    cursor: pointer;

    &:hover {
      background: darken(@primary, 10%);
    }

    &:disabled {
      cursor: not-allowed;
      background: lighten(@primary, 20%);
    }
  }
}
</style>