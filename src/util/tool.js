import moment from "moment";

// 获取当前时间函数
export function dateFormat(date, format = "YYYY-MM-DD HH:mm:ss") {
    return moment(date).format(format)
}

// 时间戳函数
export function unixFormat(unix, format = "YYYY-MM-DD HH:mm:ss") {
    return moment.unix(unix).format(format)
}




