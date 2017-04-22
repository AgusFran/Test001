$(document).ready(
    function() {
        console.log("ready for work");
        $("#btn").on("click", loadTable);
    });

function loadTable() {
    if ($("#tab")==undefined){
    	$("body").append("<table><tr><th>Registro</th><th>Descripción</th><th>Posición</th><th>Random</th></table>");
    }
    var n=$("#qua").val();
    console.log(n);
    for (var i = 0; i < n; i++) {
    	$("#tab").html("<tr><td>"+(i+1)+"</td><td>Cosa</td><td>"+i+"</td><td>"+"rand()"+"</td></tr>");
    }
}
