package com.example.ciclo3.controlador;

import java.util.ArrayList;

import com.example.ciclo3.modelos.UsuarioModelo;
import com.example.ciclo3.servicios.UsuarioServicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/usuario")
public class UsuarioControlador {
    @Autowired
    UsuarioServicio usuarioServicio;

    @GetMapping
    public ArrayList<UsuarioModelo> obtenerUsuarios(){
        return usuarioServicio.obtenerUsuarios();
    }

    @PostMapping
    public UsuarioModelo guardarUsuario(@RequestBody UsuarioModelo usuario){
        return usuarioServicio.guardarUsuario(usuario);
    }
    
}
