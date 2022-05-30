const botonShare1 = document.getElementById('miboton').addEventListener("click",clicked);
const botonShare2 = document.getElementById('mi-boton2').addEventListener("click",clicked2);



function clicked(){
document.getElementById('pie1').style.display = 'none';
document.getElementById('pie2').style.display = 'flex';



}

function clicked2(){

document.getElementById('pie1').style.display = 'flex';
document.getElementById('pie2').style.display = 'none';

}












