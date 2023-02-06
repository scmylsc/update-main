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
function choco(){
    var1 = document.getElementById("sub_cake_1").src="../img/CAKES/cake3.jpg";
    var2 = document.getElementById("sub_cake_2").src="../img/CAKES/onebytwo.jpeg";
    var3 = document.getElementById("sub_cake_3").src="../img/CAKES/copy.jpeg";

    

}