$(document).ready(
    function() {
        console.log($("#tab"));
        $("#btn").on("click", loadTable);
        $.fn.exists = function() {
            return this.length > 0 ? this : false;
        }
    });
function loadTable() {
    console.clear();
    $("#cont2").html($("<table id=tab>").html("<tr><th>Registro</th><th>Descripción</th><th>Posición</th><th>Random</th>"));
    console.log(undefined);
    var n = $("#qua").val();
    console.log(n);
    for (var i = 0; i < n; i++) {
        $("#tab").append("<tr><td>" + (i + 1) + "</td><td>Cosa</td><td>" + i + "</td><td>" + "rand()" + "</td></tr>");
        console.log(i);
    }
}

function rand() {
    var r = Number.Random();
    var opts = ["Numero", "Cualquiera", "generado", "aleatoriamente"];
    return opts[r % 4];
}
