document.write('<p>Estadisticas centro medico ñuñoa</p>');

const radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

const traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

const dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

document.write("<hr>")

// Ejercicio 1: Agregar horas al arreglo traumatologia[]

traumatologia.push( //metodo push() es utilizado para ingresar nuevos objetos al array anterior
    {hora: '09:00',  especialista: 'RENÉ POBLETE',          paciente: 'ANA GELLONA',rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30',  especialista: 'MARIA SOLAR',          paciente: 'RAMIRO ANDRADE',rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00',  especialista: 'RAUL LOYOLA',          paciente: 'CARMEN ISLA',rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30',  especialista: 'ANTONIO LARENAS',          paciente: 'PABLO LOAYZA',rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00',  especialista: 'MATIAS ARAVENA',          paciente: 'SUSANA POBLETE',rut: '14345656-6', prevision: 'FONASA'},
)
console.log(`Resultado ejercicio 1:`)
console.log(traumatologia) //el array traumatologia[] ahora cuenta con 5 nuevos objetos


// Ejercicio 2: Eliminar el primer y último elemento del arreglo radiologia[]

radiologia.shift() //el metodo shift() retira el primer objeto del array radiologia[]
radiologia.pop() //el metodo pop() retira el ultimo objeto del array radiologia[]

console.log(`Resultado ejercicio 2:`)
console.log(radiologia) //el array radiologia[] ahora cuenta con 2 objetos menos, el primero y ultimo


// Ejercicio 3: imprimir la lista de consultas médicas de dental[]

document.write(`<h2><u>Pacientes Dental</u></h2>`)

for (let i = 0; i < dental.length; i++) { 
    document.write(`<p>${dental[i].hora} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].rut} - ${dental[i].prevision}</p>`)
}

document.write("<hr>")

// Ejercicio 4: Imprimir un listado total de todos los pacientes

document.write(`<h2><u>Listado de pacientes</u></h2>`)

//allPacientes

let combinado = [] //se crea un nuevo arreglo vacio para concatenar uno nuevo despues.
combinado = combinado.concat(radiologia, traumatologia, dental) //se concatenan los arreglos mencionados para crear uno nuevo con todos sus objetos.

for (let i = 0; i < combinado.length; i++) { 
    document.write(`<p>${combinado[i].paciente}</p>`) //se imprime el listado de pacientes en el nuevo arreglo.
}

document.write("<hr>")

// Ejercicio 5: Filtrar aquellos pacientes que indican ser de ISAPRE de Dental

document.write(`<h2><u>Pacientes Dental con Isapre</u></h2>`)

let isapreDental = dental.filter(function(dental){ //metodo filter() se usa para crear un nuevo arreglo filtrando los objetos con una función
    return dental.prevision == "ISAPRE"; //todos los objetos que cuenten con la propiedad 'prevision' con un string "ISAPRE" son filtrados y agregados al nuevo arreglo
})
for (let i = 0; i < isapreDental.length; i++) {
    document.write(`<p>${isapreDental[i].paciente} - ${isapreDental[i].prevision}</p>`) //Se imprimen todos los pacientes de este nuevo arreglo junto a su previsión
}

document.write("<hr>")

// Ejercicio 6:Filtrar aquellos pacientes que indican ser de FONASA de Traumatología

document.write(`<h2><u>Pacientes Traumatologia con Fonasa</u></h2>`)

let fonasaTraumatologia = traumatologia.filter(function(traumatologia){ //metodo filter() se usa para crear un nuevo arreglo filtrando los objetos con una función
    return traumatologia.prevision == "FONASA"; //todos los objetos que cuenten con la propiedad 'prevision' con un string "FONASA" son filtrados y agregados al nuevo arreglo
})
for (let i = 0; i < fonasaTraumatologia.length; i++) {
    document.write(`<p>${fonasaTraumatologia[i].paciente} - ${fonasaTraumatologia[i].prevision}</p>`)//Se imprimen todos los pacientes de este nuevo arreglo junto a su previsión
}


document.write("<hr>")

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);

