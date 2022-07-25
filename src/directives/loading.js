// 导入图片
import imgUrl from "@/assets/loading.svg";

// 导入样式
import styles from "./loading.module.less";

// 创建img元素
function createImg() {
    const img = document.createElement("img");
    img.src = imgUrl;
    img.dataset.role = "loading";
    img.classList.add(styles.loading);
    return img;
}

export default function (el, binging) {
    // 获取创建的img
    const curImg = el.querySelector("img[data-role=loading]");

    // 1.处在加载状态，并且curImg为false的时候创建图片；不在加载状态的时候直接删除元素
    if (binging.value && !curImg) {
        const img = createImg();
        el.appendChild(img);
    } else if (!binging.value && curImg) {
        curImg.remove();
    }
}