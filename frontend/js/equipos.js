$("#agg").click(function(){
    var nombre = $("#nombre").val();
    var url = 'http://localhost:8080/equipo';
    var datos = {nombre: nombre};

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert("Equipo Guardado Correctamente"));
  })
