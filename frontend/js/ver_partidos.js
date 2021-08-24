$(document).ready(function () {
      $.ajax({
        url: "http://127.0.0.1:8080/partido",
        method: "GET",
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        async: false,
        success: function (respuesta) {
          respuesta.forEach(function (element) {
            $.ajax({
              url: "http://127.0.0.1:8080/equipo/" + element.local,
              method: "GET",
              cache: false,
              contentType: false,
              processData: false,
              dataType: "json",
              async: false,
              success: function (respuesta) {
                var local = respuesta["nombre"];
                $.ajax({
                  url: "http://127.0.0.1:8080/equipo/" + element.visitante,
                  method: "GET",
                  cache: false,
                  contentType: false,
                  processData: false,
                  dataType: "json",
                  success: function (response) {
                    $("#partidos tbody").append('<tr><td>' + element.fecha + '</td><td>' + local + '</td><td>' + response["nombre"] + '</td><td>' + element.goles_local + '</td><td>' + element.goles_visitante + '</td></tr>');
                  }
                })
              }
            })
          })
        }
      })
    })