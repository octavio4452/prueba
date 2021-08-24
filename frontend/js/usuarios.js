
    $("#guardar").click(function(){
      var nombre = $("#nombre").val();
      var correo = $("#correo").val();
      var usuario = $("#usuario").val();
      var clave = $("#clave").val();
      var url = 'http://127.0.0.1:8080/usuario';
      var datos = {nombre: nombre, correo: correo, nombreusuario: usuario, clave:  clave};
  
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    })
  