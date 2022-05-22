const Divcont = document.getElementById('container');

let btn = document.getElementById('btn');
    btn.onclick = function(event){
        event.preventDefault();

        const datumNarodenin = document.getElementById('Birthdate').value;
        let datumN = moment(datumNarodenin);
        let Dnes = moment();

        //nadstavenie roku narodenín na terajší, prípadne budúci
        let string =  Dnes.toISOString();  
        let acYear = string.split(/[\-T]+/);
        let string2 =  datumN.toISOString();
        let brdate = string2.split(/[\-T]+/);
        brdate[0] = acYear[0];                   // rok narodenia = súčasný rok
        let  datumN2 = brdate[0] + "-" + brdate[1] + "-" + brdate[2];
        let  Dnes2 = acYear[0] + "-" + acYear[1] + "-" + acYear[2];

        if(Dnes2 > datumN2 ) {                  // ak sú narodeniny v roku budúcom pridá rok
            datumN2 = (+brdate[0] + +1) + "-" + brdate[1] + "-" + brdate[2];
        }

        let datumN3 = moment(datumN2);
        let dni = datumN3.diff(Dnes, 'days');


        // určenie ročného obdobia v ktorom sa dotičny narodil
        function rocneobdobieN() {
            mesiac = brdate[1];
            rObdobie = '';
            switch(mesiac) {
                case '12':
                case '01':
                case '02':
                    rObdobie = 'ZIMA';
                break;
                case '03':
                case '04':
                case '05':
                    rObdobie = ' JAR ';
                break;
                case '06':
                case '07':
                case '08':
                    rObdobie = 'LETO';
                break;
                case '09':
                case '10': 
                case '11':
                    rObdobie = 'JESEŇ';
                break;
            }
        }
        rocneobdobieN();

        // vytvorenie zápisu vysledkov do html
        if(Divcont.innerHTML !== null || "" ) {
            Divcont.innerHTML = "";
        }
        Divcont.innerHTML += "<p>" + dni + '      dní do narodenín' + "<br>" + 'Obdobie v ktorom si narodený  -     ' + rObdobie + "</p>"; 
    }
