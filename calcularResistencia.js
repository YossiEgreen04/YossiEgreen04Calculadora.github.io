function calcularCorriente() {
    
    var resistencia = document.getElementById('resistencia').value;
    var unidad = document.getElementById('unidad').value;

    
    if (unidad === 'kilohm') {
        resistencia *= 1000;
    }

    
    var voltaje = 5; 
    var corriente = (voltaje / resistencia) * 1000; 

    
    document.getElementById('resultado').textContent = `Corriente: ${corriente.toFixed(2)} mA`;
}
