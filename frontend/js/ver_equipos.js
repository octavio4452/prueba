$(document).ready(function () {
    $.ajax({
            url: "http://127.0.0.1:8080/equipo",
            method: "GET",
              cache: false,
              contentType: false,
              processData: false,
              dataType: "json",
              success: function (respuesta) {
                respuesta.forEach(function (element) {
                    $("#equipos tbody").append('<tr><td>' + element.id + '</td><td>' + element.nombre + '</td></tr>');
                })
                  }
              })
            })
