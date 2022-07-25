export default function (timestamp, showTime) {
    const date = new Date(+timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    let result = `${year}-${month}-${day}`;
    if(showTime) {
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const sec = date.getSeconds().toString().padStart(2, "0");
        result += ` ${hours}:${minutes}:${sec}`;
    }
    return result;
}