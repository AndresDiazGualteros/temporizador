let botonIniciar = document.getElementById("boton")
botonIniciar.addEventListener("click", () => {
    
    const seg = document.getElementById("caja1").value;

    const tiempo = document.getElementById("caja2");

    function temporizador(seg){

        if(seg === 0){
            return tiempo.value = "fin";
        }else{
            tiempo.value = seg;
            return setTimeout(temporizador,1000,seg-1);
        }

    }

    temporizador(seg);

})