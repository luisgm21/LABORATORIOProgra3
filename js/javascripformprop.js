function activarDesactivar(obj) {
    /*if ("obj.options[obj.selectedIndex].value=="Departamento") { valida solo para selects*/
    if (obj.value=="Casa"){  
        document.getElementById("pileta").disabled=false;
        document.getElementById("patio").disabled=false;
        document.getElementById("terraza").disabled=false;
        document.getElementById("frente").disabled=true;
        document.getElementById("contrafrente").disabled=true;
        document.getElementById("esp_com").disabled=true;
        document.getElementById("baño_priv").disabled=true;

    } else{ if(obj.value=="Departamento"){
        document.getElementById("pileta").disabled=true
        document.getElementById("patio").disabled=true;
        document.getElementById("terraza").disabled=true;
        document.getElementById("frente").disabled=false;
        document.getElementById("contrafrente").disabled=false;
        document.getElementById("esp_com").disabled=false;
        document.getElementById("baño_priv").disabled=true;
            }else {if(obj.value=="Habitacion"){
                document.getElementById("pileta").disabled=true;
                document.getElementById("patio").disabled=true;
                document.getElementById("terraza").disabled=true;
                document.getElementById("frente").disabled=true;
                document.getElementById("contrafrente").disabled=true;
                document.getElementById("esp_com").disabled=true;
                document.getElementById("baño_priv").disabled=false;//Cambiar a un switch
                    }
                  }
            
           }
            /*Agregar una funcion que deshabilite los menus cuando entramos*/ 
            
            }