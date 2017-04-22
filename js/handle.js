$(document).ready(
    function() {
        console.log("pija");
        $("#btn").on("click", loadTable); //assings the send button the propetie to call the send funtion when clicked
    });
n=true;
function loadTable() {
    console.log("testify");
    if(n){
//   if($("#tab")==false){
        $("body").append($("<table id='tab'></table>").html("<tr><th>Registro</th><th>Descripción</th><th>Posición</th><th>Random</th>"));
        n=false;
    }
    console.log($("#qua").val());
    for(var i=0;i<$("#qua").val();i++)
    {   $("#tab").append("<tr><td>"+(i+1)+"</td><td>Cosa</td><td>"+i+"</td><td>"+"rand()"+"</td></tr>");
        console.log(i);
    }
}
function rand(){
    var r=Number.Random();
    var opts=["Numero","Cualquiera","generado","aleatoriamente"];
    return opts[r%4];
}