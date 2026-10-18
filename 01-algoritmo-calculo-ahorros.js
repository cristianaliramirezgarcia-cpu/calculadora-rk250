/*const metaMoto = 2000; // precio estimado
let ahorroActual = 105; //lo que llevo
let ingresoSemanal = 25; //lo que puedo ahorrar seguro
function calcularTiempo(ahorro,ingreso,meta) {
    let faltante = meta - ahorro;
    let semanasRestantes = faltante / ingreso;
    return Math.ceil(semanasRestantes);// para redondear hacia arriba (semanas completas)
    }
    const semanasParaLaMoto = calcularTiempo(ahorroActual,ingresoSemanal, metaMoto);
    console.log("---PLAN DE ACCION RK 250 ---");
    console.log(`te faltan $${metaMoto - ahorroActual} para la meta.`);
    console.log(`a este ritmo, tendras tu moto en: ${semanasParaLaMoto} semanas`);
    console.log(`eso son aproximadamente ${(semanasParaLaMoto / 4).toFixed(1)} meses
    */
        let open = JSON.parse(localStorage.getItem('calculate')) || [];
        console.log(open[0]);
        if(open.length > 0){
            document.getElementById('precioMoto').value = open[0];
            document.getElementById('ahorroActual').value = open[1];
            document.getElementById('ingresoSemanal').value = open[2];
            calcularSemanas();
        }
        async function calcularSemanas() {
            let precio = Number(document.getElementById('precioMoto').value);
            let ahorro = Number(document.getElementById('ahorroActual').value); 
            let ingreso = Number(document.getElementById('ingresoSemanal').value);
            
            if ((precio > 0 && ahorro > 0 && ingreso > 0) || (precio > 0 && ingreso > 0)) {
                let falta = precio - ahorro;
                let semanas = Math.ceil(falta / ingreso);
                
                const divResultado = document.getElementById('resultado'); {
                    divResultado.innerHTML = `Te faltan ${(semanas / 4.33).toFixed(1)} meses para estrenar tu RK 250`;
                    let porcentaje = (ahorro / precio) * 100;
                    if (porcentaje > 100) porcentaje = 100;
                    const barra = document.getElementById('barra-progreso');
                    const textoPorcentaje = document.getElementById('texto-porcentaje');
                    barra.style.width = porcentaje + "%";
                    textoPorcentaje.innerText =
                    porcentaje.toFixed(1) + "% de tu meta alcanzada";}

                    let guardar = JSON.stringify([precio,ahorro, ingreso]);
                    localStorage.setItem('calculate', guardar);
    } else {
        const divResultadoAlterno = document.getElementById('resultado'); {
            divResultadoAlterno.innerHTML = 'inserta un numero en los espacios';
        }
    }
}