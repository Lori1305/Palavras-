let palavra

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria()}


function palavraAleatoria(){
  let palavras = ["calvice", "osteoporose", "leptosplasmose", "cancro mole", "Loren 2G"]
  return random(palavras)}

function formatacao(){
 
    textAlign(CENTER, CENTER)
    textSize (50)
    fill (color(random (100, 200), random(0, 0),
random(100, 200)))
} 

function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo, 1,
palavra.length)
  let parcial = palavra.substring(0, quantidade)
  return parcial
}




function draw() {
  background("pink");
  formatacao()
  let texto = palavraParcial(0, width)
  text (texto, 200, 200)
} 
