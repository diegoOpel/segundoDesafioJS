let resultado = (convertidor, importe) => {
    let resultadoInterno = 0;
    switch(convertidor){
        case 1:
            resultadoInterno = importe/143.88;
            return `${importe} pesos equivalen a ${resultadoInterno} dólares oficiales`;
        case 2:
            resultadoInterno = importe*135.42;
            return `${importe} dólares equivalen a ${resultadoInterno} pesos`;
        case 3:
            resultadoInterno = importe/136.83; 
            return `${importe} pesos equivalen a ${resultadoInterno} euros oficiales`;
        case 4:
            resultadoInterno = importe*136.75;
            return `${importe} euros equivalen a ${resultadoInterno} pesos`;
        default:
            return "Ingrese una opción o importe válidos"
    }
};
let continuar = () =>{
    let loopeador = prompt("¿Deseas realizar otra conversión? S/N");
    if (loopeador.toLowerCase() === "s"){
        return true;
    }else if(loopeador.toLowerCase() === "n"){
        return false;
    }else {
        alert("Ingrese un valor válido S o N");
        continuar();
    }
};
do{
    let convertidor = parseInt(prompt("Ingrese el convertidor a utilizar: 1-De pesos a dólares, 2- De dólares a pesos, 3- De pesos a euros, 4- De euros a pesos"));
    let importe = parseFloat(prompt("Ingrese el importe a convertir: "));
    alert(resultado(convertidor,importe));
}while(continuar());