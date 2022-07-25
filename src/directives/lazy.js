import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/default.gif";

// 存储这一页需要加载的图片
let imgs = [];

const viewHeight = document.documentElement.clientHeight;
const imgHeight = 140;

function setImage(imgInfo) {
    // 先让所有图片都为一个默认显示的图片
    imgInfo.dom.src = defaultGif;

    const rect = imgInfo.dom.getBoundingClientRect();

    // 处理在视口内需要显示的图片
    if (rect.top >= -imgHeight && rect.top <= viewHeight) {
        // 加载图片
        const srcImg = new Image();
        // 加载完成后设置为正确的图片
        srcImg.onload = function () {
            imgInfo.dom.src = srcImg.src;
        }
        srcImg.src = imgInfo.src;

        // 把处理过的图片从数组中移除
        imgs = imgs.filter(img => img.dom !== imgInfo.dom);
    }

}

// 调用这个函数就能帮我们加载需要的图片
function setImages() {
    // 将每一项图片交由setImage函数
    for (const img of imgs) {
        setImage(img);
    }
}

// 监听mainScroll事件
eventBus.$on("mainScroll", debounce(setImages, 50));


export default {
    // 向图片数组加数据
    inserted(el, binging) {
        const imgInfo = {
            dom: el,
            src: binging.value
        }
        imgs.push(imgInfo);
        setImage(imgInfo);
    },
    // 这个元素消失的时候调整数组
    unbind(el) {
        imgs = imgs.filter(img => img.dom != el);
    }
}