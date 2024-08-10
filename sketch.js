//variáveis da bola

let xBola = 100;
let yBola = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bola

let speedXBola = 6;
let speedYBola = 6;

//variáveis da raquete

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 100;

//variáveis do oponente

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let speedYOponente;

let colidiu = false;

//variáveis placar

let pontosJogador = 0;
let pontosOponente = 0;


//funções


function setup() {
  createCanvas(600, 400);
  soundTrack.loop();
}

function draw() {
  background(0);
  mostraBola();
  moveBola();
  colisaoBola();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  moveRaquete();
  //colisaoRaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  moveRaqueteOponente();
  mostraPlacar();
  marcadorPonto();
}

//funções bola

function mostraBola() {
  circle(xBola, yBola, diametro);
}

function moveBola() {
  xBola += speedXBola;
  yBola += speedYBola;
}

function colisaoBola() {
  if (xBola + raio > width || xBola - raio < 0) {
    speedXBola *= -1;
  }
  if (yBola + raio > height || yBola - raio < 0) {
    speedYBola *= -1;
  }
}

//funções raquete

function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function moveRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function colisaoRaquete() {
  if (xBola - raio < xRaquete +raqueteComprimento && yBola - raio < yRaquete + raqueteAltura && yBola + raio > yRaquete ) {
    speedXBola *=-1;    
    
  }
}

function colisaoRaqueteBiblioteca(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBola, yBola, raio);
  
  if (colidiu){
    speedXBola *= -1; 
    raquete.play(); 
  }
}

//funções raquete do oponente

function moveRaqueteOponente(){
  if(keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}

//funções placar

function mostraPlacar() {
  textAlign(CENTER);
  textSize(16)
  fill(color(0, 200, 0))
  stroke("white")
    rect(150, 10, 40, 20);
  fill(255);
    text(pontosJogador, 170, 26);
 fill(color(350, 0, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
 textFont("Verdana")
}

function marcadorPonto() {
  if (xBola > 590){
    pontosJogador += 1
    
  }
  if (xBola < 15){
    pontosOponente += 1;
 }
}

