/**
 * 
 * @param {string} id id属性名
 * @param {object} data 数据
 * @return {string}   渲染成功的结果
 */
function template(id,data){
    // 根据id找到要渲染的内容
    let str = document.getElementById(id).innerHTML
    // 匹配正则
    let pattern = /{{\s*([a-zA-Z]+)\s*}}/
    // exec结果
    let patternResult = null
    // 不断循环寻找下一个并改造
    while(patternResult = pattern.exec(str)){
        // patternResult[0] {{ x }}
        // patternResult[1]    x
        // data[patternResult[1]] 8
        str = str.replace(patternResult[0],data[patternResult[1]])
    }
    // 将渲染出来的html字符串返回
    return str
}