//*** ENCAPSULAMENT ****/

var capsula_rellotge_r0B = () => {
    //alert('programa iniciat');
    let busca_segon = document.getElementById("segon");


    setInterval(giraBusca, 1000);




    //TODO crear hora
    function horaActual() {
        let noutemps = new Date();
        let temps_h = noutemps.getHours();
        let temps_m = noutemps.getMinutes();
        let temps_s = noutemps.getSeconds();
        let temps = { hores: temps_h, minuts: temps_m, segons: temps_s };
        return temps;
    }


    //TODO Crear busca

    //TODO girar busca
    function giraBusca() {
        let hora = horaActual();
        //transforma segons a graus
        let graus = hora.segons * 6 + 180;
        busca_segon.style.transform = 'rotate(' + graus + 'deg)';
        console.log(hora.segons + "''" + " | " + graus + "º");
    }


}

//*** FI ENCAPSULAMENT ****/

/** Funció que s'executa quan es carrega l'script */
var init_capsula_rellotge_r0B = (
    capsula_rellotge_r0B
)();