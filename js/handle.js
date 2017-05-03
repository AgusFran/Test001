$(document).ready(
    function() {
        $("#btn").on("click", function(e) {
            var n = $("#qua").val();
            e.preventDefault();
            loadTable(n);
        });
        /*$.fn.exists = function() {
            return this.length > 0 ? this : false;
        }*/
    });

function loadTable(n) {
    //   $("#cont2").html($("<table id='tab' class='tabl'>").html("<tr><th>Registro</th><th>Descripción</th><th>Posición</th><th>Random</th>"));
    //   console.log("Creado tabla");
    console.log(n);
    tBody=$("#jqTable tbody");
    tBody.empty("");
    for (var i = 1; i <= n; i++) {
        tBody.append("<tr><td>" + i + "</td><td>Elemento " + i +"</td></tr>");
    }
}
