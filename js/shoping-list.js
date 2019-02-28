var list=[];
    function addItem(){
        list.push([document.getElementById("product").value,
                   document.getElementById("nmbr").value,
                   document.getElementById("price").value
                ]);
        showList();
        restart();
    }
function showList(){
        var rez="<table>", total=0;
        for(i=0; i<list.length; i++){
            rez+="<tr>";
            for(j=0; j<list[i].length; j++){
                rez+="<td>"+list[i][j]+"<td>";
            }
            rez += `<td><span class="delete" onclick="deleteItem(${i});">&times;</span></td></tr>`
        //     rez+='<td><span class="delete" onclick="deleteItem(' + i + ');">&times;</span></td></tr>';
            total+=list[i][1]*list[i][2];
        }
        document.getElementById("total").innerHTML=total;
        document.getElementById("table").innerHTML=rez;
}
function deleteItem(row){
        list.splice(row,1);
        showList();
}
function restart(){
        document.getElementById("product").value="";
        document.getElementById("nmbr").value="";
        document.getElementById("price").value="";
}