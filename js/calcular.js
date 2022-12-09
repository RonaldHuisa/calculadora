var bandera = 0; // 0 = Escribe , 1 = No escribe
var sintaxis = "";

function mostrar(valor){
    let operador = ["+","-","*","/"]

    //Sintaxis es resultado
    if(bandera == 1){
        if(operador.includes(valor)){
            document.getElementById('resultado').value += valor;
            bandera = 0;
            sintaxis += valor;
        }
    }else{
        if(sintaxis == ""){
            if(!operador.includes(valor)){
                document.getElementById('resultado').value += valor;
                sintaxis += valor;
            }
        }else{
            if(operador.includes(sintaxis[sintaxis.length-1]) && operador.includes(valor)){

                if(sintaxis[sintaxis.length-1] != valor ){
                    let arreglo = document.getElementById('resultado').value;
                    arreglo = arreglo.substring(0, arreglo.length-1);
                    document.getElementById('resultado').value = arreglo + valor;
                    sintaxis = arreglo + valor;
                }else{
                    document.getElementById('resultado').value += "";
                }

            }else{
                document.getElementById('resultado').value += valor;
                sintaxis += valor;
            }
        }
    }

}



function borrar(){
    document.getElementById('resultado').value = "";
    document.getElementById('resultado').placeholder = "0";
    sintaxis = ""
    bandera = 0;
}


function limpiar(){
    if(bandera == 0){
        let todo = document.getElementById('resultado').value;
        if(todo.length <= 0){
            document.getElementById('resultado').value = "";
        }else{
            document.getElementById('resultado').value = todo.substring(0, todo.length - 1);
        }
    }
}

function resolver(){

    let operacion = document.getElementById('resultado').value;

    if(operacion == ""){
        document.getElementById('resultado').value = "";
    }else{


        let contador = 0;
        let opciones = [".","+","-","*","/","1","2","3","4","5","6","7","8","9","0"]

       for(let i=0; i<operacion.length; i++){ 
            contador = (opciones.includes(operacion[i])) ? 0 : 1;
       }

        if(contador == 0){

            resolucion = eval(operacion) 
            console.log(resolucion)
            document.getElementById('resultado').value = resolucion;
            sintaxis = resolucion;
            bandera = 1;
            
        }else{
            document.getElementById('resultado').placeholder = "Error";
            document.getElementById('resultado').value = "";
            sintaxis = "";
            bandera = 0;
        }
    }
    
}