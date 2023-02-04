function open_sub_nav(){
        var tik = document.getElementById("checkbox1");  
        var text= document.getElementById("navid");
        var icon = document.getElementById("menu-icon");
        if(tik.checked == true){
            text.style.display = "none";
            icon.className = "fa fa-bars";
        }
        else{
            icon.className = "fa fa-close";
            text.style.display = "block";
        }

        

    }