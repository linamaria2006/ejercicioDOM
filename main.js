
const tabla = document.querySelector("#tablaDOM tbody")
const requestURL = 'https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json';

let num =1 ;

// creo un arreglo para cada evento en el cual el primer numero es fp, el segundo tn, el tercero fn y el cuarto tp
let fp =  0;
let tn = 0;
let fn = 0;
let tp = 0;
let eventos = []
var numa = new Array();
let a;
function x() {
fetch(requestURL)
.then(res=>res.json())
.then(acts => {acts.forEach(ardilla =>
     {
         ardilla.events.forEach( evento =>{
           if (!eventos.includes(evento))
           {
               console.log(evento);
eventos.push(evento);
console.log(eventos.indexOf(evento));
numa[eventos.indexOf(evento)] = new Array(4);

           }
         }
            )


    const row = document.createElement('tr');
    if(ardilla.squirrel)
    {
        row.innerHTML += `
    <td id = "rojo"> ${num}</td>
    <td id = "rojo" > ${ardilla.events}</td>
    <td id = "rojo"> ${ardilla.squirrel}</td>
    `;
    }

    else{
    row.innerHTML += `
    <td> ${num}</td>
    <td> ${ardilla.events}</td>
    <td> ${ardilla.squirrel}</td>
    `;
    }
    tabla.appendChild(row);
    num++

});
})
}
function crearArrays(){
    eventos.forEach(evt => 
        {

        })
}

function crearArreglos(){
           for(var i = 0; i<eventos.length; i++ )
           {

           }
    
}
function tabla2(){
    fetch(requestURL).then(res=>res.json())
    .then( ardillas => {ardillas.forEach(ardilla =>
        {
            let numa2 = eventos;
            console.log("alo")
            console.log(numa2);
            ardilla.events.forEach(evento =>

                

                {
                    console.log("q")
                    console.log(evento)
                    numa[0][3] =1;
                    console.log(numa[0][3]);
                    numa2.splice(eventos.findIndex(fruit => fruit == evento));
                    //tp
                    if(ardilla.squirrel){
                    if(numa[eventos.findIndex(fruit => fruit == evento)][4] == undefined) {
                    numa[eventos.findIndex(fruit => fruit == evento)][4] = 1;
                    }
                    else {numa[eventos.findIndex(fruit => fruit == evento)][4] += 1;}
                }

                else { 
                    //fn
                    if(numa[eventos.findIndex(fruit => fruit == evento)][3] === undefined) {
                        numa[eventos.findIndex(fruit => fruit == evento)][3] = 1;
                        }
                        else {numa[eventos.findIndex(fruit => fruit == evento)][3] += 1;}
                }

            }

            )

            eventos.forEach(evt =>
                {
                    if(ardilla.squirrel){
                    //tp
                    if(numa[eventos.findIndex(fruit => fruit == evento)][1] == undefined) {
                        numa[eventos.findIndex(fruit => fruit == evento)][1] = 1;
                        }
                        else {numa[eventos.findIndex(fruit => fruit == evento)][1] += 1;}
                    }

                    else {
                        if(numa[eventos.findIndex(fruit => fruit == evento)][2] == undefined) {
                            numa[eventos.findIndex(fruit => fruit == evento)][2] = 1;
                            }
                            else {numa[eventos.findIndex(fruit => fruit == evento)][2] += 1;}
                     }

                }
                )
        }
        )
    })
}
x();
tabla2();
