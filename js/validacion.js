function validacion(){
    var tipo_prop = document.getElementById("tipo_prop").value;
    if(tipo_prop == null || valor.length == 0){
        alert('[ERROR] Elija el tipo de propiedad');
        return false;
    }
    var metros_cub = document.getElementById("mtr2_cubiertos").value;
    if(metros_cub == null || valor.length == 0){
        alert('[ERROR] La Cantidad de Metros Cuadrados Cubiertos debe ser mayor a 0');
        return false;
    }
    var metros_semicub = document.getElementById("mtr2_semicubiertos").value;
    if(metros_semicub == null || valor.length == 0){
        alert('La Cantidad de Metros Cuadrados Semicubiertos debe ser mayor a 0');
        return false;
    }
    var capacidad = document.getElementById("capacidad").value;
    if(capacidad == null || valor.length == 0){
        alert('[ERROR] La capacidad debe ser mayor a 0');
        return false;
    }
    var cant_banios = document.getElementById("cant_banios").value;
    if(cant_banios == null || valor.length == 0){
        alert('[ERROR] Elija la cantidad de baños que tiene la propiedad');
        return false;
    }
    var cant_ambientes = document.getElementById("cant_ambientes").value;
    if(cant_ambientes == null || valor.length == 0){
        alert('[ERROR] Elija la cantidad de ambientes de la propiedad');
        return false;
    }
    alert("El formulario se cargó correctamente")
    return true;

}
