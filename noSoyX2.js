function collage(numero) {
  switch (numero) {
    case 1:
      document.getElementById(
        "foto1"
      ).innerHTML = `<img src="img/fondo/1.png" onclick="volver(1)" alt="">`;
      document.getElementById("foto1").className = "collage";
      document.getElementById("mensaje1").innerHTML = ``;
      break;
    case 2:
      document.getElementById(
        "foto2"
      ).innerHTML = `<img src="img/fondo/2.png" onclick="volver(2)" alt="">`;
      document.getElementById("foto2").className = "collage";
      document.getElementById("mensaje2").innerHTML = ``;
      break;
    case 3:
      document.getElementById(
        "foto3"
      ).innerHTML = `<img src="img/fondo/3.png" onclick="volver(3)" alt="">`;
      document.getElementById("foto3").className = "collage";
      document.getElementById("mensaje3").innerHTML = ``;
      break;
    case 4:
      document.getElementById(
        "foto4"
      ).innerHTML = `<img src="img/fondo/4.png" onclick="volver(4)" alt="">`;
      document.getElementById("foto4").className = "collage";
      document.getElementById("mensaje4").innerHTML = ``;
      break;
    case 5:
      document.getElementById(
        "foto5"
      ).innerHTML = `<img src="img/fondo/5.png" onclick="volver(5)" alt="">`;
      document.getElementById("foto5").className = "collage";
      document.getElementById("mensaje5").innerHTML = ``;
      break;
    case 6:
      document.getElementById(
        "foto6"
      ).innerHTML = `<img src="img/fondo/6.png" onclick="volver(6)" alt="">`;
      document.getElementById("foto6").className = "collage";
      document.getElementById("mensaje6").innerHTML = ``;
      break;
    case 7:
      document.getElementById(
        "foto7"
      ).innerHTML = `<img src="img/fondo/7.png" onclick="volver(7)" alt="">`;
      document.getElementById("foto7").className = "collage";
      document.getElementById("mensaje7").innerHTML = ``;
      break;
    case 8:
      document.getElementById(
        "foto8"
      ).innerHTML = `<img src="img/fondo/8.png" onclick="volver(8)" alt="">`;
      document.getElementById("foto8").className = "collage";
      document.getElementById("mensaje8").innerHTML = ``;
      break;
    case 9:
      document.getElementById(
        "foto9"
      ).innerHTML = `<img src="img/fondo/9.png" onclick="volver(9)" alt="">`;
      document.getElementById("foto9").className = "collage";
      document.getElementById("mensaje9").innerHTML = ``;

      break;
  }
}

function volver(numero) {
  switch (numero) {
    case 1:
      document.getElementById(
        "foto1"
      ).innerHTML = `<img src="img/alegre.png" onclick="collage(1)" alt="">`;
      document.getElementById("foto1").className = "overlay";
      document.getElementById("mensaje1").innerHTML = `<img src="img/florks/1.png" alt="">`;
      break;
    case 2:
      document.getElementById(
        "foto2"
      ).innerHTML = `<img src="img/artistica.png" onclick="collage(2)" alt="">`;
      document.getElementById("foto2").className = "overlay";
      document.getElementById("mensaje2").innerHTML = `<img src="img/florks/2.png" alt="">`;
      break;
    case 3:
      document.getElementById(
        "foto3"
      ).innerHTML = `<img src="img/creativa.png" onclick="collage(3)" alt="">`;
      document.getElementById("foto3").className = "overlay";
      document.getElementById("mensaje3").innerHTML = `<img src="img/florks/3.png" alt="">`;
      break;
    case 4:
      document.getElementById(
        "foto4"
      ).innerHTML = `<img src="img/divertida.png" onclick="collage(4)" alt="">`;
      document.getElementById("foto4").className = "overlay";
      document.getElementById("mensaje4").innerHTML = `<img src="img/florks/4.png" alt="">`;
      break;
    case 5:
      document.getElementById(
        "foto5"
      ).innerHTML = `<img src="img/maravillosa.png" onclick="collage(5)" alt="">`;
      document.getElementById("foto5").className = "overlay";
      document.getElementById("mensaje5").innerHTML = `<img src="img/florks/5.png" alt="">`;
      break;
    case 6:
      document.getElementById(
        "foto6"
      ).innerHTML = `<img src="img/hermosa.png" onclick="collage(6)" alt="">`;
      document.getElementById("foto6").className = "overlay";
      document.getElementById("mensaje6").innerHTML = `<img src="img/florks/6.png" alt="">`;
      break;
    case 7:
      document.getElementById(
        "foto7"
      ).innerHTML = `<img src="img/inteligente.png" onclick="collage(7)" alt="">`;
      document.getElementById("foto7").className = "overlay";
      document.getElementById("mensaje7").innerHTML = `<img src="img/florks/7.png" alt="">`;
      break;
    case 8:
      document.getElementById(
        "foto8"
      ).innerHTML = `<img src="img/elegante.png" onclick="collage(8)" alt="">`;
      document.getElementById("foto8").className = "overlay";
      document.getElementById("mensaje8").innerHTML = `<img src="img/florks/8.png" alt="">`;
      break;
    case 9:
      document.getElementById(
        "foto9"
      ).innerHTML = `<img src="img/talentosa.png" onclick="collage(9)" alt="">`;
      document.getElementById("foto9").className = "overlay";
      document.getElementById("mensaje9").innerHTML = `<img src="img/florks/9.png" alt="">`;
      break;
  }
}
