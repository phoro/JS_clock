//*** ENCAPSULAMENT ****/

var capsula_rellotge_r0B = () => {

    let contenidor = document.getElementById("contenidor");

    //Crea busca segons
    var busca_segon = document.createElement('div');
    busca_segon.id = "segon";
    busca_segon.className = "busca";
    contenidor.appendChild(busca_segon);

    //Crea busca minuts
    var busca_minut = document.createElement('div');
    busca_minut.id = "minut";
    busca_minut.className = "busca";
    contenidor.appendChild(busca_minut);
    giraBuscaMinut(horaActual());

    //Crea busca hores
    var busca_hora = document.createElement('div');
    busca_hora.id = "hora";
    busca_hora.className = "busca";
    contenidor.appendChild(busca_hora);
    giraBuscaHora(horaActual());

    setInterval(giraBuscaSegon, 1000);

    //TODO crear hora
    function horaActual() {
        let noutemps = new Date();
        let temps_h = noutemps.getHours();
        let temps_m = noutemps.getMinutes();
        let temps_s = noutemps.getSeconds();
        let temps = { hores: temps_h, minuts: temps_m, segons: temps_s };
        return temps;
    }

  
    function giraBuscaSegon() {
        let hora = horaActual();
        //transforma segons a graus
        let graus = hora.segons * 6 + 180;
        busca_segon.style.transform = 'rotate(' + graus + 'deg)';
        if (hora.segons === 0){
            giraBuscaMinut(hora);
        }
        
    }

   
    function giraBuscaMinut(hora) {
        //transforma minurs a graus
        let graus = hora.minuts * 6 + 180;
        busca_minut.style.transform = 'rotate(' + graus + 'deg)';
        if (hora.minuts === 0){
            giraBuscaHora(hora);
        }
        
    }

    function giraBuscaHora(hora) {
        //transforma hores a graus
        let graus = hora.hores * 30 + 180;
        busca_hora.style.transform = 'rotate(' + graus + 'deg)';
        
    }


}

//*** FI ENCAPSULAMENT ****/

/** Funció que s'executa quan es carrega l'script */
var init_capsula_rellotge_r0B = (
    capsula_rellotge_r0B
)();