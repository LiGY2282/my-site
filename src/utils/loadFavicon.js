export default function (url) {
    let link = document.querySelector("link[rel=icon]");
    if(!link) {
        link = document.createElement("link")
        document.body.appendChild(link);
    }
    link.href = url;
}