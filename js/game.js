var nr=o;
restart(nr);
function prindeNumar(){
    var mesaj="";
    var valoare=document.getElementById("nr").value;
    mesaj=((valoare>=nr-10)&&(valoare<=nr+10)) ? "Caldut" : "Rece";
    if(valoare==nr) {mesaj="<span class='ghicit'>Acesta-i!!!</span>";}
    document.getElementById("rez1").innerHTML=mesaj;
    document.getElementById("gen").innerHTML=valoare;
}
function introduNumar(){
    var valoare=document.getElementById("txt").value;
    var sablon=/^[0-9]{1,2}$/;
    var mesaj="";
    if(!(sablon.test(valoare))){
        mesaj="Introdu numar intreg din una sau doua cifre.";        
    }
    else if(!(valoare==nr)){
        mesaj="Mai incearca o data.";
    }
    else {
        mesaj="Bravo ai ghicit numarul!";
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
