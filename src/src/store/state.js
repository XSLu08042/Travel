//try catch防止用户隐身访问或浏览器禁止localStorage
let defaultCity = '北京'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}

export default {
        city: defaultCity
}