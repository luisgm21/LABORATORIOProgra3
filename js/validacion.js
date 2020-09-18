function validacion(){
    var valor = document.getElementById("tipo_prop").value;
    if(valor == null || valor.length == 0){
        alert('[ERROR] Elija el tipo de propiedad');
        return false;
    }
    var fecha = document.getElementById("fecha_alta").value;
    if(fecha < Date.now){
        alert('[ERROR] La fecha no puede ser anterior al día de hoy');
        return false;
    }
    alert("El formulario se cargó correctamente")
    return true;

}
