document.addEventListener("DOMContentLoaded", function(event) {
    
    let targetImage = document.querySelector("#smart-image");
    targetImage.addEventListener("click", function() {
        
        if (targetImage.classList.contains("small")) {
            targetImage.classList.remove("small");
        } else {
            targetImage.classList.add("small");
        }


    });
    document.getElementById("btn").onclick=function(){send()};//设置按钮触发事件（函数send（））
    function send(){
        var value= document.getElementById("typing").value;//获得文本框里的内容
        var p= document.createElement("p");//创建新元素，也即结点
        p.innerHTML='<hr>'+value;//往结点里塞内容
        document.getElementById("commend").prepend(p); 
    }

});

