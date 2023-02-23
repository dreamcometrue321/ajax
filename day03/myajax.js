/**
 * 
 * @param {object} date 
 * @return {string} result
 */
function resolveData(data){
    let arr = []
    for (let key in data) {
        arr.push(key+'='+data[key])
    }
    let result = arr.join('&')
    return result
}

function myajax(option){
    let xhr = new XMLHttpRequest()
    let qs = resolveData(option.data)
    if(option.method.toUpperCase() === 'GET'){
        xhr.open('GET',option.url+'?'+qs)
        xhr.send()
    }else if(option.method.toUpperCase() === 'POST'){
        
        xhr.open('POST',option.url)
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        xhr.send(qs)
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            option.success(JSON.parse(xhr.responseText))
        }
    }
}