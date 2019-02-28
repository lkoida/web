var informatie = "In Republica moldova Craciunul este sarbotorit in data de 25/12 si in data de 07/01."; 
alert(informatie);  
var nr1, nr2;
nr1 = 7;
nr2 = nr1 * 2 + 15;
alert("Rezultatul expresiei calculate \neste "+ nr2);
alert("Lungimea sirului textual cu denumirea 'informatie' \neste "+ informatie.length);
var infoNou = informatie.replace("25/12", "25 decembrie");
infoNou = infoNou.replace("07/01", "7 ianuarie");
alert(infoNou);


