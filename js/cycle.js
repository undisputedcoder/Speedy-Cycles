function showMenu(){
    var men = document.getElementById("tabs");
    var cont = document.getElementById('main');

    if(men.style.display == "block"){
        men.style.display = "none";
        cont.style.paddingTop= '15%';
    }
    else{
        men.style.display = "block";
        cont.style.paddingTop = '30%';
    }
}

function checkNav(){
    var men = document.getElementById("tabs");
    var tgl = document.getElementById("nav-toggle");
    var cont = document.getElementById('main');

    if(window.innerWidth >= 1000){
        men.style.display = "block";
        cont.style.paddingTop = '10px';
    }
    else{
        men.style.display = "none";
        cont.style.paddingTop = '15%';
    }
}