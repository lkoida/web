var contor=0, mesaj=""; 
function contorClick(){
    contor++;
                if(contor==1)
                {mesaj='Cam putin.. ai tastat, doar o data.'}
                else if(contor>=2 && contor<=10)
                {mesaj='Ai tastat de ' +contor+ ' ori.. Se poate si mai mult.'}
                else
                {mesaj='Bravo ai avut rabdare de a tasta de '+ contor +' ori.'}
                document.getElementById('rez').innerHTML=mesaj;
}