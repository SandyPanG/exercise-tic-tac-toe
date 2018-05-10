

var play = function(event){
  console.log("hola");
  console.log(event.target);
  var target = event.target;
  //Modificar contenido segun turno
  if(juego.turno === 0){
    //jugador1
    target.textContent = juego.ficha1
    juego.turno = 1;
    juego.JugadorActual = juego.jugador1;
    checkBoard();
  }else{
    //jugador2
    target.textContent = juego.ficha2
    juego.turno = 0;
    juego.JugadorActual = juego.jugador2;
  }
  target.removeEventListener("click",play);
  document.getElementById("Jugador-actual").textContent = juego.JugadorActual;
  juego.movimientos += 1;
};
var checkBoard = function(){};
var getPlayers =function(event){
  console.log(event)
  event.preventDefault();//Evita que se recargue la página por default.
  juego.jugador1 = document.getElementById("onePlayer").value;
  juego.jugador2 = document.getElementById("twoPlayer").value;
};

var juego = {
  jugador1:"onePlayer",
  jugador2:"twoPlayer",
  turno: 0,
  ficha1:"X",
  ficha2:"O",
  movimientos:0,
  JugadorActual:""
}

var botonInput = document.getElementsByTagName('button')[0];
botonInput.addEventListener("click",getPlayers);
var celdas = document.getElementsByTagName("td");

console.log(celdas);
Array.from(celdas).map(function(cell){
  console.log(cell);
  cell.addEventListener("click", play);
});
