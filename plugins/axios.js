import { Message } from "element-ui";

// nuxt 插件的固定写法
// context 包含nuxt下所有的方法，固定有的参数
export default (context) => {
    // 拦截错误的响应信息，跟以前项目中的main.js中的拦截器不一样
    // main.js中的拦截器是拦截所有的请求响应
    // 当前的拦截器只拦截错误信息，如果请求错误就会执行onError中的函数
    context.$axios.onError(res => {
        // res是错误的对象，Error的对象可以通过response获取详细信息
        const {message, statusCode} = res.response.data;

        if(statusCode === 400){
            Message.error(message)
        }
    })
}