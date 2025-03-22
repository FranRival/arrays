let originalArray = [1, 2, 3, 4, 5];
let newArray = originalArray.filter(num => num !== 5); // Creates a new array without 5
console.log(originalArray); // Output: [1, 2, 3, 4, 5]
console.log(newArray); // Output: [1, 2, 3, 4]

//splice modifica el array original.


//usar delete con su propia asignacion y luego comparar la matriz y luego eliminar ese valor de la matriz.

//partiremos desde la forma mas basica de js - asinacion de valor por numeros o strings.

//y luego convertir los string en valores. u objetos. 

//que propiedades tienen los objetos.

//luego las variables para modificarlas con freeze.


//json.parse y json.stringfy

//luego se utiliza el deepCopy - shallowCopy

//lo stringgifygeamos. 
const objeto = {nombre: "Ana", edad: 25};
const json = JSON.stringify(objeto);
console.log(json); // '{"nombre":"Ana","edad":25}

const estudiante1 = {
    name: 'studiante1',
    age: 18,
    approveCourses: ['Curso 1'],
    addCourse(newCourse){
        console.log('This', this);
        console.log('This.approveCourses', this.approveCourses);
        this.approveCourses.push(newCourse)//no se how it works this push and this
    }
}

//i got understand more about la clase estudiante1. y su universalidad con el resto de objetos derivados.
//como convertimos objetos en string y string en objetos a usarlos en shallowcopy y getproperties

//assing: para combinar varios objetos en uno solo. los parametros repetidos solo toma los ultimos valores.
//sho sha no undestand nothing.


//sho not understand nothing in la funcion de deepCopy.

//we in dangerous. because voy a entry a new job. or thats going fine. i really dont know how it works
