// 导入需要的模块
import getComponentRootDom from "./getComponentRootDom.js";
import Icon from "@/components/Icon";
import styles from "./message.module.less";
/**
 * 弹出消息框
 * @param {String} content 消息文本
 * @param {String} type 消息类型 error sucess info warn
 * @param {HTMLElement} container 消息显示在哪个容器的中心，默认在页面正中
 * @param {Number} duration 持续时间
 */
export default function (config = {}) {
    const content = config.content || "";
    const type = config.type || "info";
    const container = config.container || document.body;
    const duration = config.duration | 2000;

    const div = document.createElement("div");
    div.className = `${styles.message} ${styles["message-" + type]}`;

    // 获取到ICon组件的dom元素
    const iconDom = getComponentRootDom(Icon, { type });

    // 设置相应内容
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><span>${content}</span>`;

    // 如果container有值就判断一下position是否等于static，如果是就改为relative。如果没有值则将container复制为body元素
    if (getComputedStyle(container).position === "static" && container !== document.body) {
        container.style.position = "relative";
    }

    // 将div添加到页面中
    container.appendChild(div);

    // 触发浏览器reflow，让浏览器把这个div渲染出来
    div.clientHeight;

    // 回到原本状态
    div.style.opacity = 1;
    div.style.transform = "translate(-50%, -50%)";

    // 经过dration时间后消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = "translate(-50%, -50%) translateY(-20px)";
        div.addEventListener("transitionend", function () {
            this.remove();
            config.callback && config.callback();
            if(config.callback) {
                config.callback();
            }
        })
    }, duration);
}