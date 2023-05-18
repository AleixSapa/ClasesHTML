// Datos de ejemplo en lugar de cargar un archivo JSON
var data = 
{
  nombre: 'Aleix',
  edad: 8,
  ciudad: 'Barcelona'
};










// Mostrar los datos en el contenedor
var jsonData = '';
jsonData += 'nombre: '  + data.nombre ;
jsonData += ', edad: ' + data.edad ;
jsonData += ', ciudad: ' + data.ciudad ;


console.log(data.nombre);
console.log(data.edad);
console.log(data.ciudad);

console.log(jsonData)


console.log('******************');



var pokemon = 
{
  nombre1: 'Charmander' ,
  nombre2: 'Squirtle',
  nombre3: 'Bulbasaur'
}







var pokemonConsola = pokemon.nombre1 +' '+ pokemon.nombre2 +' '+ pokemon.nombre3

console.log(pokemonConsola)





console.log('******************')





var tois=
{
  toi1 : 'Cómo Ta Tu?',
  toi2 : 'Toi Informatizao',
  toi3 : 'Toi Mu Buscao',
  toi4 : 'Toi Feli'
}

var toisConsole = tois.toi1 +', '+ tois.toi2 +', '+ tois.toi3 +', '+tois.toi4;


console.log(toisConsole)


































/*
// Obtener el contenedor donde mostraremos el JSON
var jsonContainer = document.getElementById('json-container');
jsonContainer.innerText = jsonData;

*/