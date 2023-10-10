var mensagem = '';
var objetos = [];
var img = "";
var canvas;
var detector;

function preload(){
img = loadImage("./animais.webp")
}

 function setup(){
    canvas = createCanvas(650,450)
    canvas.center()
    detector = ml5.objectDetector("cocossd", modeloCarregado)
    document.getElementById("status").innerHTML = "Detectando objetos"
 }
function modeloCarregado(){
    console.log ("cocossd carregado com sucesso")
    mensagem = true;
   detector.detect(img,mostrarResultado) 
}
function mostrarResultado(error,results){
    if (error){
        console.log(error)
    }
    console.log(results)
}

 function draw(){
    background(0)
    image(img, 0,0,650,450)
    if(mensagem==true){
        for(i=0; i<objetos.length; i++){
            console.log(i)
            console.log("entrou no for")
        }
    }
 }