
    $(document).ready(function () {
      $.ajax({
        url: "http://127.0.0.1:8080/equipo",
        method: "GET",
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (respuesta) {
          console.log(respuesta);
            respuesta.forEach(function (element, index) {
              $("#local").append('<option value="' + element.id + '">' + element.nombre + '</option>');
              $("#visitante").append('<option value="' + element.id + '">' + element.nombre + '</option>');
            })
        }
      })
    })
  
    $("#guardar").click(function(){
      var fecha = $("#fecha").val();
      var local = $("#local").val();
      var visitante = $("#visitante").val();
      var goles_local = $("#goles_local").val();
      var goles_visitante = $("#goles_visitante").val();
      var usuario=1;
  
      var url = 'http://127.0.0.1:8080/partido';
      var data = {fecha: fecha, local: local, visitante: visitante, goles_local: goles_local, goles_visitante: goles_visitante, usuario:usuario};
  
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response =>alert("Partido Guardado"));
    })
