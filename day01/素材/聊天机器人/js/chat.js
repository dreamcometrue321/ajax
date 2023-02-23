$(function(){
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()
    // 1.点击发送消息到文本框
    $('#sendBtn').on('click',function(){
        // 1.1 获取用户输入信息
        let text = $('#sendContent').val().trim()
        if(text.length <= 0){
            return $('#sendContent').val('')
        }
        // 1.2 将内容添加到聊天框
        $('ul.talk_list')
        .append('<li class="right_word">'+'<img src="img/person02.png" /><span>'+text+'</span>')
        // 1.3 输入框清空
        $('#sendContent').val('')
        // 1.4 重置滚动条
        resetui()
        // 1.5 获取消息并渲染
        getMsg(text)
    })
    // 获取聊天消息
    function getMsg(text){
        $.ajax({
            method : 'GET',
            url  : 'http://ajax.frontend.itheima.net:3006/api/robot',
            data : {
                spoken: text
            },
            success:function(res){
                
            }
        })
    }
})