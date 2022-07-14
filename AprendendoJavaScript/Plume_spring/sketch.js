//variavel bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(600,400);
}

function draw(){
  background(000);
  mostraBolinha();
  movimentaBolinha ();
  verificaColisaoBolinha();
  mostraRaquete (xRaquete, yRaquete);
  movimentaMinhaRaquete ();
  verificaColisaoRaquete ();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente ();
}
  
function mostraBolinha(){
   circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBolinha(){ 
if (xBolinha + raio > width||xBolinha - raio <0){
  velocidadeXBolinha *= -1;
}

if (yBolinha + raio > height ||yBolinha - raio <0){
  velocidadeYBolinha *= -1;
}
}

function mostraRaquete(x,y){
  rect (x,y, raqueteComprimento, raqueteAltura);
}

function movimentaRaqueteOponente (){
  velocidadeYOponente = yBolinha - yRaqueteOponente -raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function movimentaMinhaRaquete (){
  if (keyIsDown(UP_ARROW)){yRaquete -=10;
}
  if (keyIsDown(DOWN_ARROW)){yRaquete +=10;
}
}

function verificaColisaoRaquete (){
  if (xBolinha - raio < xRaquete + raqueteComprimento 
      && yBolinha - raio < yRaquete + raqueteAltura 
      && yBolinha + raio > yRaquete){
    velocidadeXBolinha *=-1;
  }
}


