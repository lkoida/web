var nr=o;
restart(nr);
function prindeNumar(){
    var mesaj="";
    var valoare=document.getElementById("nr").value;
    mesaj=((valoare>=nr-10)&&(valoare<=nr+10)) ? "<span class='text'>Caldut</span>" : "<span class='text'>Rece</span>";
    if(valoare==nr) {mesaj="<span class='strong-style'>Acesta-i!!!</span>";}
    document.getElementById("rez1").innerHTML=mesaj;
    document.getElementById("gen").innerHTML=valoare;
}
function introduNumar(){
    var valoare=document.getElementById("txt").value;
    var sablon=/^[0-9]{1,2}$/;
    var mesaj="";
    if(!(sablon.test(valoare))){
        mesaj="<span class='strong-style'>Introdu numar intreg din una sau doua cifre.</span>";        
    }
    else if(!(valoare==nr)){
        mesaj="<span class='text'>Mai incearca o data.</span>";
    }
    else {
        mesaj="<span class='strong-style'>Bravo ai ghicit numarul!</span>";
    }
    document.getElementById("rez2").innerHTML=mesaj;
}
function restart(){
    nr=Math.floor(Math.random(nr)*78);
    document.getElementById("rez1").innerHTML="";
    document.getElementById("rez2").innerHTML="";
    document.getElementById("txt").value="";
    document.getElementById("nr").value="";
    document.getElementById("gen").innerHTML="";
}
