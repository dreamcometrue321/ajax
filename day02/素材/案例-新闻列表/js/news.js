/**
 *  补零
 * @param {int} n 
 * @returns 
 */
function padZero(n){
    return n < 10 ? '0'+n : n
}

/**
 * 格式化时间函数
 * yyyy-MM-dd HH:mm:ss
 * @param {Date} date 
 * @returns 
 */
function dateFormat(date){
    let time = new Date(date)
    let y = padZero(time.getFullYear())
    let m = padZero(time.getMonth()+1)
    let d = padZero(time.getDay())
    let hh = padZero(time.getHours())
    let mm = padZero(time.getMinutes())
    let ss = padZero(time.getSeconds())
    return y + '-'+ m + '-'+ d + ' '+ hh + ':'+ mm + ':'+ ss  
}

$(function(){
    $.get('http://www.liulongbin.top:3006/api/news',function(res){
        
        if(res.status !== 200){
            return alert('获取新闻列表失败')
        }
        // 字符串变数组 格式化时间
        for(let i = 0; i < res.data.length; i++){
            res.data[i].tags = res.data[i].tags.split(',')
            res.data[i].time = dateFormat(res.data[i].time)
        }
        
        console.log(res)
        // 调用模板
        let htmlStr = template('tpl-news',res)
        // 渲染内容
        $('#news-list').html(htmlStr)
    })
})