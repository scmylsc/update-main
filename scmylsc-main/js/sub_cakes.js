function open_sub_nav(){
        var tik = document.getElementById("checkbox");  
        var text= document.getElementById("navid");
        var icon = document.getElementById("menu-icon");
        if(tik.checked == true){
            text.style.display = "none";
            text.style.transition = "all 2s";
            icon.className = "fa fa-bars";
        }
        if(tik.checked == false){
    
            text.style.transition = "all 2s";
            text.style.display = "block";
           icon.className = "fa fa-close";
    
        }    
    }





function click(){
    location.href = '../main_html?sub_cakes.html'
}


function test(){
    alert(1);
}