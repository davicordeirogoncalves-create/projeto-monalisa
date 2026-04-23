
let cx = 400;
let cy = 400;
fill("#607D8B");cir
cle(cx, cy, 600); // rosto

// olhosfunction setup() {
createCanvas(800, 800);
}

function draw() {
background("#3F51B5");

let olhoEsqX = cx - 100;
let olhoDirX = cx + 100;
let olhoY = cy - 100;

fill("#00BCD4");
circle(olhoEsqX, olhoY, 90);
let olhoDirX = cx + 100; 
// função pra desenhar pupila limitada
function desenhaPupila(ox, oy) {
let dx = mouseX - ox;
let dy = mouseY - oy;

let distancia = sqrt(dx * dx + dy * dy);

let limite = 15; // quanto a pupila pode se mover

if (distancia > limite) {
dx = (dx / distancia) * limite;
dy = (dy / distancia) * limite;
}

fill(0);
circle(ox + dx, oy + dy, 15);
}

desenhaPupila(olhoEsqX, olhoY);
desenhaPupila(olhoDirX, olhoY);

// nariz
fill("#3F51B5");
triangle(cx, cy - 20, cx - 30, cy + 20, cx + 30, cy + 20);

// boca
line(cx - 50, cy + 50, cx + 50, cy + 20);

// sobrancelhas
line(cx - 120, cy - 140, cx - 60, cy - 140);
line(cx + 60, cy - 140, cx + 120, cy - 140);
}
Atividade: "AV1: Avaliação _ HTML, CCS e GITHUB"
