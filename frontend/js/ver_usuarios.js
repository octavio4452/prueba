$(document).ready(function () {
    $.ajax({
              url: "http://127.0.0.1:8080/usuario",
              method: "GET",
              cache: false,
              contentType: false,
              processData: false,
              dataType: "json",
              success: function (respuesta) {
                respuesta.forEach(function (element) {
                    $("#usuarios tbody").append('<tr><td>' + element.id + '</td><td>' + element.nombre + '</td><td>' + element.correo + '</td><td>' + element.nombreusuario + '</td></tr>');
                })
                  }
              })
            })